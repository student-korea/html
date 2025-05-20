create table member(
id varchar2(100) primary key,
pw varchar2(100),
name varchar2(100),
phone varchar2(100)
);

insert into member(id,pw,name,phone) values(
    'aaa','1111','Eric','010-1111-1111'
);
insert into member values(
    'bbb','1111','Hina','010-1111-1112'
);
insert into member(id,pw,name,phone) values(
    'ccc','1111','Sophia','010-1111-1113'
);
insert into member(id,pw,name,phone) values(
    'ddd','1111','Rei','010-1111-1114'
);
insert into member(id,pw,name,phone) values(
    'eee','1111','Alice','010-1111-1115'
);

update member set phone='010-1234-1234' where id='ccc';

update member set name='Rei' where id='ccc';

drop table member;


rollback;

commit;

select id,pw,name,phone from member;

select * from member;

select id,name from member;

create table stuscore(
sno number(4) primary key,
name varchar2(100),
kor number(3),
eng number(3),
math number(3),
total number(3),
avg number(4),
rank number(3)
)


