export type BaseEntity = {
  // id?: string;
  // created_at?: string;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type Meta = {
  page: number;
  total: number;
  totalPages: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  gender?: null;
  dob?: null;
  email_verified_at: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
};

export type Setting = Entity<{
  id: string;
  site_name: string;
  app_name: string;
  site_email: string;
  support_email: string;
  site_logo: string;
  app_logo: string;
  site_phone: string;
  address: string;
  site_favicon: string;
  app_icon: string;
  deleted_at?: string;
  created_at: string;
  updated_at: string;
}>;

export type Verify = {
  email: string;
  type: string;
  otp: string;
};
export type Resend = {
  email: string;
  type: string;
};

export type AuthResponse = {
  data: {
    user: User;
    access_token: string;
    refresh_token: string;
  };
};

export type Categories = {
  id: string;
  created_by: string;
  name: string;
  slug: string;
  description: string | null;
  deleted_at: null;
  created_at: string;
  updated_at: string;
};

export type CreatedBy = {
  id: string;
  role_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  username: string;
  gender: string;
  email_verified_at: string;
  two_factor_enabled: boolean;
  two_factor_code: null;
  deleted_at: null;
  created_at: string;
  updated_at: string;
};

export type UpdatedBy = {
  id: string;
  role_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  username: string;
  gender: string;
  email_verified_at: string;
  two_factor_enabled: boolean;
  two_factor_code: null;
  deleted_at: null;
  created_at: string;
  updated_at: string;
};

export type PublishedBy = {
  id: string;
  role_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  username: string;
  gender: string;
  email_verified_at: string;
  two_factor_enabled: boolean;
  two_factor_code: null;
  deleted_at: null;
  created_at: string;
  updated_at: string;
};

export type Category = {
  id: string;
  created_by: string;
  name: string;
  slug: string;
  description: string | null;
  deleted_at: null;
  created_at: string;
  updated_at: string;
};

export type Images = {
  id: string;
  uploader_id: string;
  attachable_id: string;
  attachable_type: string;
  // path: "uploads/68b77b42bc8333f978f57bc2066ad75c1749021673.jpg",
  path: string;
  label: string;
  // file_type: "jpg",
  file_type: string;
  deleted_at: null;
  created_at: string;
};

export type PostTags = {
  id: string;
  post_id: string;
  tag_id: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  tag: {
    id: string;
    name: string;
    slug: string;
    deleted_at: null;
    created_at: string;
    updated_at: string;
  };
};

export type Posts = {
  id: string;
  category_id: string;
  created_by: CreatedBy;
  updated_by: string;
  published_by: PublishedBy;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  is_featured: boolean;
  status: string;
  // published_at: "2025-06-04T07:29:48.000000Z",
  published_at: string;
  scheduled_publish_at: null;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  images: Images[];
  category: Category;
};

export type CategoryBySlug = {
  id: string;
  created_by: string;
  name: string;
  slug: string;
  description: null;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  posts: [
    {
      id: string;
      category_id: string;
      created_by: CreatedBy;
      updated_by: string;
      published_by: PublishedBy;
      title: string;
      slug: string;
      excerpt: string;
      contentL: string;
      is_featured: boolean;
      status: string;
      published_at: string;
      scheduled_publish_at: null;
      meta_title: string;
      meta_description: string;
      meta_keywords: string;
      deleted_at: null;
      created_at: string;
      updated_at: string;
      post_tags: PostTags[];
      comments: [];
    },
  ];
};

export type BlogPosts = {
  id: string;
  category_id: string;
  created_by: CreatedBy;
  updated_by: UpdatedBy;
  published_by: PublishedBy;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  is_featured: boolean;
  status: string;
  published_at: string;
  scheduled_publish_at: null;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  images: Images[];
  category: Category;
  post_tags: PostTags[];
  comments: [];
};

export type WaterFallPosts = {
  id: string;
  category_id: string;
  created_by: CreatedBy;
  updated_by: string | null;
  published_by: string | null;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  is_featured: boolean;
  status: string;
  published_at: string | null;
  scheduled_publish_at: string | null;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  images: Images[];
  category: Category;
  post_tags: PostTags[];
  comments: [];
};

export type FootballPosts = {
  id: string;
  category_id: string;
  created_by: CreatedBy;
  updated_by: UpdatedBy;
  published_by: PublishedBy;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  is_featured: boolean;
  status: string;
  published_at: string;
  scheduled_publish_at: null;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  images: Images[];
  category: Category;
  post_tags: PostTags[];
  comments: [];
};

export type MarathonPosts = {
  id: string;
  category_id: string;
  created_by: CreatedBy;
  updated_by: UpdatedBy;
  published_by: PublishedBy;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  is_featured: boolean;
  status: string;
  published_at: string;
  scheduled_publish_at: null;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  images: Images[];
  category: Category;
  post_tags: PostTags[];
  comments: [];
};

export type CarnivalPosts = {
  id: string;
  category_id: string;
  created_by: CreatedBy;
  updated_by: UpdatedBy;
  published_by: PublishedBy;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  is_featured: boolean;
  status: string;
  published_at: string;
  scheduled_publish_at: string | null;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  images: Images[];
  category: Category;
  post_tags: PostTags[];
  comments: [];
};

export type Post = {
  id: string;
  category_id: string;
  created_by: CreatedBy;
  updated_by: UpdatedBy;
  published_by: PublishedBy;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  is_featured: boolean;
  status: string;
  published_at: string;
  scheduled_publish_at: string | null;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  similar_posts: SimilarPost[];
  images: Images[];
  category: Category;
  post_tags: PostTags[];
  comments: Comments[];
};

export type SimilarPost = {
  id: string;
  category_id: string;
  created_by: CreatedBy;
  updated_by: string;
  published_by: PublishedBy;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  is_featured: boolean;
  status: string;
  published_at: string;
  scheduled_publish_at: string | null;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  images: Images[];
  category: Category;
};

export type Replies = {
  id: string;
  post_id: string;
  user_id: string | null;
  parent_id: string;
  guest_name: string;
  guest_email: string;
  comment: string;
  status: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
};

export type Comments = {
  id: string;
  post_id: string;
  user_id: string | null;
  parent_id: string | null;
  guest_name: string;
  guest_email: string;
  comment: string;
  status: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  replies: Replies[];
};
