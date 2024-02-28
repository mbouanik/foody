\echo 'Delete and recreate foody db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE foody;
CREATE DATABASE foody;
\connect foody

\i foody-schema.sql
-- \i jobly-seed.sql

\echo 'Delete and recreate foody_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE foody_test;
CREATE DATABASE foody_test;
\connect foody_test

\i foody-schema.sql
