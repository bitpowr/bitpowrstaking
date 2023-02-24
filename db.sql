
Table collections {
  id int [pk]
  
  uid varchar [default: `uuid_generate_v4()`] 

  created_by varchar
  collection_uri varchar

  network varchar [default: "devnet"]

  created_at datetime
  updated_at datetime
}


Table collection_upvotes {
  id int [pk]
  
  uid varchar [default: `uuid_generate_v4()`] 

  collection_uid varchar [ref: > collections.uid, not null]

  account varchar [not null]

  upvote boolean [default: false] 

  created_at datetime
  updated_at datetime
}


Table collection_validators{
  id int [pk]
  
  uid varchar [default: `uuid_generate_v4()`] 

  collection_uid varchar [ref: > collections.uid, not null]

  account varchar [not null]

  

  created_at datetime
  updated_at datetime
}
