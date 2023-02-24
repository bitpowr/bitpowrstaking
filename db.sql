CREATE TABLE "collections" (
  "id" int PRIMARY KEY,
  "uid" varchar DEFAULT (uuid_generate_v4()),
  "created_by" varchar,
  "collection_uri" varchar,
  "network" varchar DEFAULT 'devnet',
  "created_at" datetime,
  "updated_at" datetime
);

CREATE TABLE "collection_upvotes" (
  "id" int PRIMARY KEY,
  "uid" varchar DEFAULT (uuid_generate_v4()),
  "collection_uid" varchar NOT NULL,
  "account" varchar NOT NULL,
  "upvote" boolean DEFAULT false,
  "created_at" datetime,
  "updated_at" datetime
);

CREATE TABLE "collection_validators" (
  "id" int PRIMARY KEY,
  "uid" varchar DEFAULT (uuid_generate_v4()),
  "collection_uid" varchar NOT NULL,
  "account" varchar NOT NULL,
  "created_at" datetime,
  "updated_at" datetime
);

ALTER TABLE "collection_upvotes" ADD FOREIGN KEY ("collection_uid") REFERENCES "collections" ("uid");

ALTER TABLE "collection_validators" ADD FOREIGN KEY ("collection_uid") REFERENCES "collections" ("uid");
