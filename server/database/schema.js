CREATE TABLE if not exists public.plants
(
  id serial NOT NULL,
  plantName text,
  species text,
  watering text,
  sunlight text,
  fertilizer text,
  username text,
  picture text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT plants_pkey PRIMARY KEY(id)
);

CREATE TABLE if not exists public.sessions
(
  id serial NOT NULL,
  session_id text,
  plant_id integer,
  added_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT sessions_pkey PRIMARY KEY(id),
  CONSTRAINT sessions_plant_id_fkey FOREIGN KEY(plant_id)
    REFERENCES public.plants(id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
);