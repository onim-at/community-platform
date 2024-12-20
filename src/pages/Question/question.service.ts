import {
  and,
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore'
import { IModerationStatus } from 'oa-shared'
import { DB_ENDPOINTS } from 'src/models/dbEndpoints'

import { firestore } from '../../utils/firebase'

import type {
  DocumentData,
  QueryDocumentSnapshot,
  QueryFilterConstraint,
  QueryNonFilterConstraint,
} from 'firebase/firestore'
import type { ICategory, IQuestion, IQuestionDB } from 'oa-shared'
import type { QuestionSortOption } from './QuestionSortOptions'

export enum QuestionSearchParams {
  category = 'category',
  q = 'q',
  sort = 'sort',
}

const search = async (
  words: string[],
  category: string,
  sort: QuestionSortOption,
  snapshot?: QueryDocumentSnapshot<DocumentData, DocumentData>,
  take: number = 10,
) => {
  const { itemsQuery, countQuery } = createQueries(
    words,
    category,
    sort,
    snapshot,
    take,
  )

  const documentSnapshots = await getDocs(itemsQuery)
  const lastVisible = documentSnapshots.docs
    ? documentSnapshots.docs[documentSnapshots.docs.length - 1]
    : undefined

  const items = documentSnapshots.docs
    ? documentSnapshots.docs.map((x) => {
        const item = x.data() as IQuestion.Item
        return {
          ...item,
          commentCount: 0,
        }
      })
    : []
  const total = (await getCountFromServer(countQuery)).data().count

  return { items, total, lastVisible }
}

const createQueries = (
  words: string[],
  category: string,
  sort: QuestionSortOption,
  snapshot?: QueryDocumentSnapshot<DocumentData, DocumentData>,
  take: number = 10,
) => {
  const collectionRef = collection(firestore, DB_ENDPOINTS.questions)
  let filters: QueryFilterConstraint[] = [
    and(
      where('_deleted', '!=', true),
      where('moderation', '==', IModerationStatus.ACCEPTED),
    ),
  ]
  let constraints: QueryNonFilterConstraint[] = []

  if (words?.length > 0) {
    filters = [...filters, and(where('keywords', 'array-contains-any', words))]
  }

  if (category) {
    filters = [...filters, where('questionCategory._id', '==', category)]
  }

  if (sort) {
    const sortConstraint = getSort(sort)

    if (sortConstraint) {
      constraints = [...constraints, sortConstraint]
    }
  }

  const countQuery = query(collectionRef, and(...filters), ...constraints)

  if (snapshot) {
    constraints = [...constraints, startAfter(snapshot)]
  }

  const itemsQuery = query(
    collectionRef,
    and(...filters),
    ...constraints,
    limit(take),
  )

  return { countQuery, itemsQuery }
}

const getQuestionCategories = async () => {
  const collectionRef = collection(firestore, DB_ENDPOINTS.questionCategories)

  return (await getDocs(query(collectionRef))).docs.map(
    (x) => x.data() as ICategory,
  )
}

const createDraftQuery = (userId: string) => {
  const collectionRef = collection(firestore, DB_ENDPOINTS.questions)
  const filters = and(
    where('_createdBy', '==', userId),
    where('moderation', 'in', [
      IModerationStatus.AWAITING_MODERATION,
      IModerationStatus.DRAFT,
      IModerationStatus.IMPROVEMENTS_NEEDED,
      IModerationStatus.REJECTED,
    ]),
    where('_deleted', '!=', true),
  )

  const countQuery = query(collectionRef, filters)
  const itemsQuery = query(collectionRef, filters, orderBy('_modified', 'desc'))

  return { countQuery, itemsQuery }
}

const getDraftCount = async (userId: string) => {
  const { countQuery } = createDraftQuery(userId)

  return (await getCountFromServer(countQuery)).data().count
}

const getDrafts = async (userId: string) => {
  const { itemsQuery } = createDraftQuery(userId)
  const docs = await getDocs(itemsQuery)

  return docs.docs ? docs.docs.map((x) => x.data() as IQuestion.Item) : []
}

const getSort = (sort: QuestionSortOption) => {
  switch (sort) {
    case 'Comments':
      return orderBy('commentCount', 'desc')
    case 'LeastComments':
      return orderBy('commentCount', 'asc')
    case 'Newest':
      return orderBy('_created', 'desc')
    case 'LatestComments':
      return orderBy('latestCommentDate', 'desc')
    case 'LatestUpdated':
      return orderBy('_modified', 'desc')
  }
}

const getBySlug = async (slug: string) => {
  // Get all that match the slug, to avoid creating an index (blocker for cypress tests)
  let snapshot = await getDocs(
    query(
      collection(firestore, DB_ENDPOINTS.questions),
      where('slug', '==', slug),
    ),
  )

  if (snapshot.size === 0) {
    // try previous slugs if slug is not recognized as primary
    snapshot = await getDocs(
      query(
        collection(firestore, DB_ENDPOINTS.questions),
        where('previousSlugs', 'array-contains', slug),
      ),
    )
  }

  if (snapshot.size === 0) {
    return null
  }

  return snapshot.docs[0].data() as IQuestionDB
}

export const questionService = {
  search,
  getQuestionCategories,
  getDraftCount,
  getDrafts,
  getBySlug,
}

export const exportedForTesting = {
  createQueries,
}
