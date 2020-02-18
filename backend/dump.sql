--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: aaron
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.ar_internal_metadata OWNER TO aaron;

--
-- Name: genders; Type: TABLE; Schema: public; Owner: aaron
--

CREATE TABLE public.genders (
    id bigint NOT NULL,
    name character varying,
    description character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.genders OWNER TO aaron;

--
-- Name: genders_id_seq; Type: SEQUENCE; Schema: public; Owner: aaron
--

CREATE SEQUENCE public.genders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.genders_id_seq OWNER TO aaron;

--
-- Name: genders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aaron
--

ALTER SEQUENCE public.genders_id_seq OWNED BY public.genders.id;


--
-- Name: looking_fors; Type: TABLE; Schema: public; Owner: aaron
--

CREATE TABLE public.looking_fors (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    gender_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.looking_fors OWNER TO aaron;

--
-- Name: looking_fors_id_seq; Type: SEQUENCE; Schema: public; Owner: aaron
--

CREATE SEQUENCE public.looking_fors_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.looking_fors_id_seq OWNER TO aaron;

--
-- Name: looking_fors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aaron
--

ALTER SEQUENCE public.looking_fors_id_seq OWNED BY public.looking_fors.id;


--
-- Name: matches; Type: TABLE; Schema: public; Owner: aaron
--

CREATE TABLE public.matches (
    id bigint NOT NULL,
    user1_rating integer,
    user2_rating integer,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.matches OWNER TO aaron;

--
-- Name: matches_id_seq; Type: SEQUENCE; Schema: public; Owner: aaron
--

CREATE SEQUENCE public.matches_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.matches_id_seq OWNER TO aaron;

--
-- Name: matches_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aaron
--

ALTER SEQUENCE public.matches_id_seq OWNED BY public.matches.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: aaron
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO aaron;

--
-- Name: users; Type: TABLE; Schema: public; Owner: aaron
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying,
    name character varying,
    password character varying,
    age integer,
    points integer,
    bio text,
    city character varying,
    gender_id bigint NOT NULL,
    image_url character varying,
    is_looking boolean,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.users OWNER TO aaron;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: aaron
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO aaron;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aaron
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: genders id; Type: DEFAULT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.genders ALTER COLUMN id SET DEFAULT nextval('public.genders_id_seq'::regclass);


--
-- Name: looking_fors id; Type: DEFAULT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.looking_fors ALTER COLUMN id SET DEFAULT nextval('public.looking_fors_id_seq'::regclass);


--
-- Name: matches id; Type: DEFAULT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.matches ALTER COLUMN id SET DEFAULT nextval('public.matches_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: ar_internal_metadata; Type: TABLE DATA; Schema: public; Owner: aaron
--

COPY public.ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
environment	development	2020-02-15 17:18:29.771048	2020-02-15 17:18:29.771048
\.


--
-- Data for Name: genders; Type: TABLE DATA; Schema: public; Owner: aaron
--

COPY public.genders (id, name, description, created_at, updated_at) FROM stdin;
1	Male		2020-02-17 15:27:56.00555	2020-02-17 15:27:56.00555
2	Female		2020-02-17 15:27:56.009577	2020-02-17 15:27:56.009577
3	Non-binary		2020-02-17 15:27:56.020169	2020-02-17 15:27:56.020169
\.


--
-- Data for Name: looking_fors; Type: TABLE DATA; Schema: public; Owner: aaron
--

COPY public.looking_fors (id, user_id, gender_id, created_at, updated_at) FROM stdin;
1	1	1	2020-02-17 15:27:56.70231	2020-02-17 15:27:56.70231
2	2	3	2020-02-17 15:27:56.712809	2020-02-17 15:27:56.712809
3	3	2	2020-02-17 15:27:56.720713	2020-02-17 15:27:56.720713
4	4	3	2020-02-17 15:27:56.727986	2020-02-17 15:27:56.727986
5	5	2	2020-02-17 15:27:56.735568	2020-02-17 15:27:56.735568
6	6	3	2020-02-17 15:27:56.742854	2020-02-17 15:27:56.742854
7	7	2	2020-02-17 15:27:56.760057	2020-02-17 15:27:56.760057
8	8	3	2020-02-17 15:27:56.768114	2020-02-17 15:27:56.768114
9	9	1	2020-02-17 15:27:56.777053	2020-02-17 15:27:56.777053
10	10	2	2020-02-17 15:27:56.785463	2020-02-17 15:27:56.785463
11	11	1	2020-02-17 15:27:56.793423	2020-02-17 15:27:56.793423
12	12	2	2020-02-17 15:27:56.80223	2020-02-17 15:27:56.80223
13	13	2	2020-02-17 15:27:56.810473	2020-02-17 15:27:56.810473
14	14	2	2020-02-17 15:27:56.818509	2020-02-17 15:27:56.818509
15	15	1	2020-02-17 15:27:56.826593	2020-02-17 15:27:56.826593
16	16	3	2020-02-17 15:27:56.834558	2020-02-17 15:27:56.834558
17	17	1	2020-02-17 15:27:56.841966	2020-02-17 15:27:56.841966
18	18	3	2020-02-17 15:27:56.849343	2020-02-17 15:27:56.849343
19	19	1	2020-02-17 15:27:56.856686	2020-02-17 15:27:56.856686
20	20	1	2020-02-17 15:27:56.87037	2020-02-17 15:27:56.87037
21	21	3	2020-02-17 15:27:56.878628	2020-02-17 15:27:56.878628
22	22	3	2020-02-17 15:27:56.886991	2020-02-17 15:27:56.886991
23	23	1	2020-02-17 15:27:56.895127	2020-02-17 15:27:56.895127
24	24	3	2020-02-17 15:27:56.903093	2020-02-17 15:27:56.903093
25	25	3	2020-02-17 15:27:56.910606	2020-02-17 15:27:56.910606
26	26	1	2020-02-17 15:27:56.918312	2020-02-17 15:27:56.918312
27	27	1	2020-02-17 15:27:56.925423	2020-02-17 15:27:56.925423
28	28	2	2020-02-17 15:27:56.932165	2020-02-17 15:27:56.932165
29	29	2	2020-02-17 15:27:56.93956	2020-02-17 15:27:56.93956
30	30	1	2020-02-17 15:27:56.946897	2020-02-17 15:27:56.946897
31	31	3	2020-02-17 15:27:56.954153	2020-02-17 15:27:56.954153
32	32	3	2020-02-17 15:27:56.960999	2020-02-17 15:27:56.960999
33	33	2	2020-02-17 15:27:56.968509	2020-02-17 15:27:56.968509
34	34	2	2020-02-17 15:27:56.98298	2020-02-17 15:27:56.98298
35	35	2	2020-02-17 15:27:56.991209	2020-02-17 15:27:56.991209
36	36	1	2020-02-17 15:27:57.011263	2020-02-17 15:27:57.011263
37	37	3	2020-02-17 15:27:57.034459	2020-02-17 15:27:57.034459
38	38	3	2020-02-17 15:27:57.046352	2020-02-17 15:27:57.046352
39	39	3	2020-02-17 15:27:57.055041	2020-02-17 15:27:57.055041
40	40	1	2020-02-17 15:27:57.062643	2020-02-17 15:27:57.062643
\.


--
-- Data for Name: matches; Type: TABLE DATA; Schema: public; Owner: aaron
--

COPY public.matches (id, user1_rating, user2_rating, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: aaron
--

COPY public.schema_migrations (version) FROM stdin;
20200214130846
20200214230416
20200214230733
20200214230827
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: aaron
--

COPY public.users (id, email, name, password, age, points, bio, city, gender_id, image_url, is_looking, created_at, updated_at) FROM stdin;
1	mahalia@daregleason.name	Teri	password	40	518	Kogi gentrify cred godard vhs. Cray wolf tilde pabst. Echo pinterest bespoke lomo next level seitan chia listicle. Fingerstache vinegar marfa park locavore bitters artisan. Actually vinyl offal try-hard next level thundercats.	Montreal	2	https://randomuser.me/api/portraits/women/34.jpg	t	2020-02-17 15:27:56.678647	2020-02-17 15:27:56.678647
2	maybell_gorczany@schulistbrekke.biz	Corey	password	32	344	90's intelligentsia pop-up before they sold out try-hard vinyl. Ramps photo booth five dollar toast. Umami mumblecore master pop-up. You probably haven't heard of them chia echo hammock lo-fi tattooed sustainable. Kickstarter salvia vhs microdosing 3 wolf moon church-key cold-pressed irony. Meggings messenger bag next level asymmetrical bushwick wayfarers selvage kogi.	Toronto	3	https://randomuser.me/api/portraits/men/40.jpg	t	2020-02-17 15:27:56.708736	2020-02-17 15:27:56.708736
3	tobias_frami@schuppewelch.info	Curtis	password	23	17	Butcher meditation mixtape etsy celiac lo-fi selfies fashion axe. Health biodiesel chambray cronut gentrify crucifix. Bespoke ethical kombucha. Leggings before they sold out gentrify asymmetrical wayfarers. Flannel slow-carb hammock austin art party tofu.	Toronto	2	https://randomuser.me/api/portraits/men/3.jpg	t	2020-02-17 15:27:56.716944	2020-02-17 15:27:56.716944
4	dianna@schroeder.io	Maximo	password	23	880	Selvage cliche crucifix try-hard hoodie meditation. Tote bag quinoa polaroid everyday mixtape. Meditation craft beer tilde. Flannel mlkshk wes anderson occupy pop-up poutine semiotics.	Montreal	1	https://randomuser.me/api/portraits/men/46.jpg	t	2020-02-17 15:27:56.724527	2020-02-17 15:27:56.724527
5	billy.sawayn@schroeder.io	Quintin	password	21	337	Typewriter art party +1 tofu tousled biodiesel. Pork belly franzen pug mumblecore williamsburg shoreditch 8-bit everyday. Banjo viral meditation pork belly whatever vhs. Fixie etsy selvage typewriter xoxo. Lumbersexual pickled heirloom small batch waistcoat hoodie trust fund. Tumblr selvage chicharrones tote bag.	Quebec City	3	https://randomuser.me/api/portraits/men/77.jpg	t	2020-02-17 15:27:56.731838	2020-02-17 15:27:56.731838
6	madie.farrell@douglasreilly.net	Carlena	password	36	723	Pbr&b dreamcatcher swag tumblr brooklyn austin. Diy ramps single-origin coffee jean shorts humblebrag pickled messenger bag. Hoodie cronut portland you probably haven't heard of them cray. Tousled drinking 8-bit.	Quebec City	1	https://randomuser.me/api/portraits/women/79.jpg	t	2020-02-17 15:27:56.739251	2020-02-17 15:27:56.739251
7	julene_will@lesch.co	Irina	password	26	737	+1 cornhole whatever. Waistcoat literally bicycle rights selvage sartorial try-hard. Vhs bicycle rights quinoa. Irony deep v hashtag wes anderson.	Quebec City	3	https://randomuser.me/api/portraits/women/7.jpg	t	2020-02-17 15:27:56.756068	2020-02-17 15:27:56.756068
8	matt@oconner.co	Roberto	password	34	997	Wes anderson readymade direct trade pork belly meggings kombucha austin jean shorts. Tacos master tilde five dollar toast mustache chia butcher swag. Quinoa brooklyn small batch pinterest. Church-key photo booth skateboard wes anderson post-ironic ramps mlkshk biodiesel. Pbr&b brooklyn chicharrones artisan keffiyeh heirloom umami kombucha.	Toronto	3	https://randomuser.me/api/portraits/men/57.jpg	t	2020-02-17 15:27:56.764265	2020-02-17 15:27:56.764265
9	roosevelt@purdyhamill.org	Paul	password	19	150	Art party raw denim pinterest. Iphone heirloom etsy chartreuse cold-pressed. Microdosing hashtag ramps vice normcore. Banjo put a bird on it thundercats. Actually blog venmo chambray tilde schlitz health. Migas schlitz thundercats kombucha.	Toronto	3	https://randomuser.me/api/portraits/women/8.jpg	t	2020-02-17 15:27:56.772427	2020-02-17 15:27:56.772427
10	barton.beier@ward.name	Edmond	password	30	246	Street small batch chicharrones intelligentsia raw denim farm-to-table. Xoxo yolo fingerstache. Franzen single-origin coffee fixie hashtag disrupt bicycle rights park. Portland crucifix raw denim narwhal lomo sartorial.	Toronto	1	https://randomuser.me/api/portraits/men/39.jpg	t	2020-02-17 15:27:56.781503	2020-02-17 15:27:56.781503
11	heath@wisozk.org	Milo	password	40	99	Meggings echo marfa. Gastropub mixtape meh shoreditch roof sartorial cronut. Whatever yolo pinterest kale chips iphone retro beard. Diy chia xoxo. Pinterest fixie roof slow-carb. Gastropub direct trade authentic park pug asymmetrical.	Toronto	1	https://randomuser.me/api/portraits/men/21.jpg	t	2020-02-17 15:27:56.789597	2020-02-17 15:27:56.789597
12	erna.langworth@smithamcremin.info	John	password	38	625	Deep v scenester wayfarers keffiyeh skateboard gentrify shoreditch lomo. Poutine crucifix thundercats hoodie. Master vegan vhs park. Butcher cray kitsch tousled. Sartorial scenester phlogiston kickstarter freegan. Venmo etsy actually.	Toronto	1	https://randomuser.me/api/portraits/men/36.jpg	t	2020-02-17 15:27:56.797573	2020-02-17 15:27:56.797573
13	everett.schoen@hahn.org	Augustus	password	28	10	3 wolf moon migas actually food truck fixie. Plaid poutine taxidermy bicycle rights. Artisan occupy raw denim art party marfa vegan craft beer flannel. Pug single-origin coffee mustache pitchfork humblebrag chicharrones goth cleanse.	Montreal	2	https://randomuser.me/api/portraits/women/83.jpg	t	2020-02-17 15:27:56.806559	2020-02-17 15:27:56.806559
14	elbert@buckridgekihn.info	Nancy	password	22	353	Vegan kombucha forage waistcoat bushwick pour-over kickstarter polaroid. Etsy tattooed vinyl forage. Taxidermy artisan cornhole raw denim lo-fi. Salvia chia crucifix. Ennui photo booth next level. Distillery keytar selvage.	Toronto	1	https://randomuser.me/api/portraits/women/61.jpg	t	2020-02-17 15:27:56.814633	2020-02-17 15:27:56.814633
15	india@fritschhowell.org	Hortense	password	40	569	Pinterest art party bitters. Semiotics migas raw denim 3 wolf moon try-hard cray tousled xoxo. Kickstarter flexitarian waistcoat chambray gastropub. Disrupt health small batch pop-up meditation pork belly gluten-free farm-to-table. Cold-pressed art party polaroid bicycle rights salvia church-key selfies +1. Five dollar toast tousled offal crucifix fingerstache mixtape.	Montreal	2	https://randomuser.me/api/portraits/men/42.jpg	t	2020-02-17 15:27:56.822657	2020-02-17 15:27:56.822657
16	jeanett@sanford.org	Jona	password	39	900	Forage chia truffaut neutra kickstarter health. +1 literally gastropub leggings tattooed. Polaroid franzen lomo. Ethical loko iphone blog whatever sriracha retro chambray. Vice post-ironic fixie semiotics franzen kombucha microdosing. Carry humblebrag tofu ethical health seitan tousled chartreuse.	Toronto	1	https://randomuser.me/api/portraits/men/67.jpg	t	2020-02-17 15:27:56.830818	2020-02-17 15:27:56.830818
17	mona.rolfson@kulas.name	Bennie	password	40	119	Vinyl retro raw denim paleo. Godard sustainable leggings pickled wayfarers muggle magic. Beard put a bird on it semiotics vinyl bicycle rights selvage xoxo. Wayfarers mixtape microdosing pinterest deep v craft beer jean shorts tousled.	Montreal	3	https://randomuser.me/api/portraits/men/34.jpg	t	2020-02-17 15:27:56.838417	2020-02-17 15:27:56.838417
18	jee_sipes@feeney.net	Jed	password	32	79	Mlkshk thundercats deep v. Narwhal shoreditch hashtag jean shorts single-origin coffee diy stumptown. Keytar 90's thundercats yuccie. Fingerstache pinterest chartreuse kale chips cronut squid ethical cornhole.	Quebec City	3	https://randomuser.me/api/portraits/women/33.jpg	t	2020-02-17 15:27:56.845761	2020-02-17 15:27:56.845761
38	emory@bartonbradtke.net	Susanna	password	37	889	Bitters authentic retro flannel meditation brunch. Kombucha meh vinegar drinking salvia. Locavore kitsch irony lumbersexual brooklyn. Semiotics venmo cred shoreditch viral. Dreamcatcher brooklyn asymmetrical.	Montreal	3	https://randomuser.me/api/portraits/men/49.jpg	t	2020-02-17 15:27:57.040956	2020-02-17 15:27:57.040956
19	sau_brakus@oconner.info	Lashaunda	password	38	708	Hoodie master microdosing asymmetrical irony raw denim flannel quinoa. Hella scenester five dollar toast portland locavore carry tofu. Pitchfork swag viral twee five dollar toast synth tofu lumbersexual. Asymmetrical mlkshk pitchfork pbr&b artisan. Yr cred hashtag street helvetica locavore pinterest tattooed. Lumbersexual vinegar flexitarian diy selvage taxidermy.	Montreal	3	https://randomuser.me/api/portraits/men/18.jpg	t	2020-02-17 15:27:56.853049	2020-02-17 15:27:56.853049
20	harley_paucek@ryan.org	Vonda	password	22	141	Ennui deep v tousled everyday cleanse knausgaard. Tofu hoodie mlkshk. Kinfolk deep v skateboard 90's. Slow-carb kogi wayfarers tacos cliche messenger bag. Schlitz roof organic banjo leggings.	Montreal	1	https://randomuser.me/api/portraits/men/52.jpg	t	2020-02-17 15:27:56.860239	2020-02-17 15:27:56.860239
21	mitchel_prosacco@hegmann.net	Santiago	password	20	638	Cray yuccie art party selfies meditation sartorial swag. Mlkshk venmo neutra shoreditch vinegar. Trust fund yolo drinking listicle ugh. Master vinyl taxidermy ennui.	Montreal	3	https://randomuser.me/api/portraits/men/93.jpg	t	2020-02-17 15:27:56.874722	2020-02-17 15:27:56.874722
22	beckie.fahey@zieme.io	Joan	password	21	110	Next level taxidermy meggings hella retro pabst locavore. Portland mixtape biodiesel. Polaroid lumbersexual fingerstache park health single-origin coffee. Freegan venmo church-key twee kale chips mumblecore pour-over.	Toronto	2	https://randomuser.me/api/portraits/men/26.jpg	t	2020-02-17 15:27:56.882912	2020-02-17 15:27:56.882912
23	sal@ritchietromp.co	Lynn	password	29	99	Church-key letterpress health waistcoat chartreuse. Muggle magic normcore try-hard. Umami distillery cronut squid xoxo small batch +1. Single-origin coffee pabst etsy hammock brunch hashtag before they sold out kogi. Sriracha deep v iphone chartreuse. Brunch chartreuse plaid slow-carb kitsch.	Toronto	1	https://randomuser.me/api/portraits/women/47.jpg	t	2020-02-17 15:27:56.891158	2020-02-17 15:27:56.891158
24	ludie_feest@king.io	Azzie	password	19	333	Skateboard park actually waistcoat bitters occupy. Knausgaard muggle magic yolo swag ugh mlkshk trust fund. Seitan occupy banh mi tacos craft beer pinterest paleo vhs. Keytar austin yolo diy pour-over pork belly. Waistcoat cornhole shabby chic twee wes anderson farm-to-table.	Toronto	2	https://randomuser.me/api/portraits/men/13.jpg	t	2020-02-17 15:27:56.899309	2020-02-17 15:27:56.899309
25	arnold@brown.name	Daniel	password	24	511	Organic whatever forage. Bushwick knausgaard gentrify vinyl tumblr plaid pickled gastropub. Quinoa shabby chic craft beer blue bottle. Kogi trust fund hoodie biodiesel butcher.	Quebec City	1	https://randomuser.me/api/portraits/men/84.jpg	t	2020-02-17 15:27:56.906973	2020-02-17 15:27:56.906973
26	edison@rutherford.io	Aiko	password	30	193	Neutra austin tacos humblebrag roof yolo. Leggings wolf jean shorts post-ironic next level +1. Retro stumptown fashion axe pop-up. Butcher helvetica venmo pour-over tattooed cliche. Beard lomo vice health ugh.	Montreal	2	https://randomuser.me/api/portraits/women/81.jpg	t	2020-02-17 15:27:56.914648	2020-02-17 15:27:56.914648
27	guadalupe_little@jacobi.info	Cleo	password	24	134	Mustache tote bag shabby chic. Mustache leggings kinfolk gentrify austin tattooed semiotics. Try-hard irony fixie. Semiotics kitsch organic distillery godard migas. Chia venmo tattooed paleo. Authentic pork belly skateboard gentrify freegan tilde banjo.	Toronto	1	https://randomuser.me/api/portraits/men/33.jpg	t	2020-02-17 15:27:56.922006	2020-02-17 15:27:56.922006
28	lillie@wiza.org	Janita	password	23	280	Pabst tote bag typewriter helvetica xoxo schlitz gastropub. Five dollar toast ennui pour-over. Crucifix forage authentic microdosing master. Put a bird on it +1 cornhole freegan irony tote bag kombucha deep v. Marfa irony farm-to-table brunch portland.	Montreal	2	https://randomuser.me/api/portraits/women/0.jpg	t	2020-02-17 15:27:56.928828	2020-02-17 15:27:56.928828
29	salley.watsica@heel.name	Elisha	password	24	610	Ennui chambray street small batch pitchfork. Bicycle rights diy muggle magic ramps bespoke. Knausgaard yolo pabst vegan. Humblebrag hoodie gentrify park migas cold-pressed tote bag.	Quebec City	1	https://randomuser.me/api/portraits/men/11.jpg	t	2020-02-17 15:27:56.935959	2020-02-17 15:27:56.935959
30	cayla@kuphal.io	Oneida	password	40	539	Portland vice cleanse fashion axe migas. Try-hard viral shabby chic semiotics. Lomo cray plaid deep v tacos 3 wolf moon hella. Knausgaard health cray fanny pack cardigan fashion axe. Farm-to-table franzen pabst williamsburg hashtag messenger bag. Street hoodie church-key fashion axe 90's blue bottle before they sold out helvetica.	Montreal	2	https://randomuser.me/api/portraits/men/86.jpg	t	2020-02-17 15:27:56.94342	2020-02-17 15:27:56.94342
31	louvenia.schaefer@thiel.co	Chester	password	38	503	Readymade marfa pug shabby chic normcore asymmetrical you probably haven't heard of them. Yuccie franzen williamsburg slow-carb. Microdosing cliche cray craft beer park tacos wolf pitchfork. Scenester chambray echo lumbersexual chia next level.	Montreal	1	https://randomuser.me/api/portraits/men/19.jpg	t	2020-02-17 15:27:56.950561	2020-02-17 15:27:56.950561
32	norman.sipes@ziemannkovacek.net	Destiny	password	40	941	Polaroid fashion axe butcher hoodie keytar swag. Plaid truffaut single-origin coffee chillwave celiac blue bottle umami pickled. Locavore post-ironic bitters hella carry roof. Scenester poutine blue bottle church-key. Butcher meditation master try-hard microdosing.	Montreal	2	https://randomuser.me/api/portraits/women/33.jpg	t	2020-02-17 15:27:56.957741	2020-02-17 15:27:56.957741
33	carl_wuckert@schuppe.net	Harvey	password	18	400	Pour-over cardigan pop-up. Celiac hella before they sold out. Listicle tattooed craft beer vhs fixie iphone kale chips. Keffiyeh marfa taxidermy kinfolk actually. Franzen vegan farm-to-table green juice locavore blue bottle etsy. Cronut art party mumblecore microdosing phlogiston.	Montreal	1	https://randomuser.me/api/portraits/men/18.jpg	t	2020-02-17 15:27:56.964786	2020-02-17 15:27:56.964786
34	keenan_langworth@schultzlangworth.info	Allison	password	30	337	Cred tote bag chia skateboard wolf irony poutine. Quinoa shoreditch tote bag microdosing hoodie next level. Keffiyeh schlitz pork belly food truck pinterest salvia before they sold out. Forage franzen synth. Cornhole godard distillery retro keffiyeh.	Quebec City	3	https://randomuser.me/api/portraits/men/6.jpg	t	2020-02-17 15:27:56.977794	2020-02-17 15:27:56.977794
35	bryan_kemmer@ritchie.com	Michelle	password	29	783	Lumbersexual bicycle rights ugh hammock chillwave. Brunch chambray tacos. Keytar jean shorts cray mustache messenger bag. Helvetica readymade butcher selvage crucifix +1. Slow-carb 8-bit next level.	Montreal	3	https://randomuser.me/api/portraits/men/91.jpg	t	2020-02-17 15:27:56.987234	2020-02-17 15:27:56.987234
36	min@padbergschneider.co	Tran	password	38	464	Drinking next level raw denim vinyl chartreuse yr literally sustainable. Celiac forage quinoa polaroid church-key craft beer keffiyeh neutra. Humblebrag migas thundercats schlitz tumblr cliche gentrify. Umami gentrify small batch. Ugh craft beer scenester typewriter cornhole you probably haven't heard of them mumblecore mustache.	Quebec City	1	https://randomuser.me/api/portraits/men/93.jpg	t	2020-02-17 15:27:56.999483	2020-02-17 15:27:56.999483
37	domitila@wilderman.io	Conrad	password	21	713	Goth occupy bespoke diy bitters green juice. Keffiyeh flexitarian 90's five dollar toast post-ironic wes anderson. Typewriter +1 lumbersexual stumptown. Shabby chic cliche humblebrag wes anderson celiac butcher. Twee mumblecore leggings beard meh kinfolk.	Montreal	2	https://randomuser.me/api/portraits/men/40.jpg	t	2020-02-17 15:27:57.025163	2020-02-17 15:27:57.025163
39	romelia@robel.co	Noma	password	32	889	Microdosing helvetica actually thundercats. Poutine lumbersexual phlogiston pbr&b. Schlitz muggle magic vice polaroid. 8-bit tofu paleo everyday swag fixie.	Montreal	1	https://randomuser.me/api/portraits/women/80.jpg	t	2020-02-17 15:27:57.051118	2020-02-17 15:27:57.051118
40	carmine_lebsack@schinner.org	Hyacinth	password	19	706	Quinoa occupy sartorial umami. Vice brooklyn cardigan single-origin coffee. Cardigan forage distillery taxidermy goth thundercats small batch. Leggings hashtag chicharrones trust fund scenester meggings drinking 8-bit.	Toronto	1	https://randomuser.me/api/portraits/women/88.jpg	t	2020-02-17 15:27:57.059057	2020-02-17 15:27:57.059057
\.


--
-- Name: genders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aaron
--

SELECT pg_catalog.setval('public.genders_id_seq', 3, true);


--
-- Name: looking_fors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aaron
--

SELECT pg_catalog.setval('public.looking_fors_id_seq', 40, true);


--
-- Name: matches_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aaron
--

SELECT pg_catalog.setval('public.matches_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aaron
--

SELECT pg_catalog.setval('public.users_id_seq', 40, true);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: genders genders_pkey; Type: CONSTRAINT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.genders
    ADD CONSTRAINT genders_pkey PRIMARY KEY (id);


--
-- Name: looking_fors looking_fors_pkey; Type: CONSTRAINT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.looking_fors
    ADD CONSTRAINT looking_fors_pkey PRIMARY KEY (id);


--
-- Name: matches matches_pkey; Type: CONSTRAINT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.matches
    ADD CONSTRAINT matches_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: index_looking_fors_on_gender_id; Type: INDEX; Schema: public; Owner: aaron
--

CREATE INDEX index_looking_fors_on_gender_id ON public.looking_fors USING btree (gender_id);


--
-- Name: index_looking_fors_on_user_id; Type: INDEX; Schema: public; Owner: aaron
--

CREATE INDEX index_looking_fors_on_user_id ON public.looking_fors USING btree (user_id);


--
-- Name: index_users_on_gender_id; Type: INDEX; Schema: public; Owner: aaron
--

CREATE INDEX index_users_on_gender_id ON public.users USING btree (gender_id);


--
-- Name: users fk_rails_47055e3204; Type: FK CONSTRAINT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT fk_rails_47055e3204 FOREIGN KEY (gender_id) REFERENCES public.genders(id);


--
-- Name: looking_fors fk_rails_7d9b3830f6; Type: FK CONSTRAINT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.looking_fors
    ADD CONSTRAINT fk_rails_7d9b3830f6 FOREIGN KEY (gender_id) REFERENCES public.genders(id);


--
-- Name: looking_fors fk_rails_a4db19ddca; Type: FK CONSTRAINT; Schema: public; Owner: aaron
--

ALTER TABLE ONLY public.looking_fors
    ADD CONSTRAINT fk_rails_a4db19ddca FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

