import moment from "moment";
import React from "react";
import { BsCalendar2Date } from "react-icons/bs";

const LIST_COMMENT = [
  {
    _id: "653e93fe555b204a4a066776",
    name: "Tabitha Baker",
    about:
      "Do magna anim veniam do laboris voluptate qui anim pariatur deserunt in officia irure ipsum. Occaecat incididunt consequat sit mollit enim amet aliqua velit sint non aliquip. In ut aliqua veniam excepteur. Irure laboris laboris excepteur ipsum consequat irure deserunt non do non magna Lorem exercitation. Aliquip aliquip in enim eu aliquip non magna veniam exercitation elit consequat consectetur elit aute. Quis laborum aliquip exercitation nisi enim cillum reprehenderit laboris ex duis consectetur mollit sint. In reprehenderit do commodo esse eiusmod.\r\n",
  },
  {
    _id: "653e93fe3d97db39487ea9ae",
    name: "Shana Boone",
    about:
      "Ea adipisicing nostrud laboris proident tempor. Consequat deserunt dolore quis officia in enim eiusmod eiusmod ullamco anim in voluptate magna. Enim pariatur duis et sunt eiusmod amet esse qui. Sint esse est incididunt enim. Quis Lorem dolore voluptate deserunt laborum deserunt. Eu sint irure veniam dolor in elit nisi eiusmod nulla proident Lorem.\r\n",
  },
  {
    _id: "653e93fef3f8ec92d1600389",
    name: "Espinoza Jacobs",
    about:
      "Qui elit incididunt laboris commodo excepteur eu ex. Aliquip reprehenderit aliquip minim fugiat sit pariatur quis do quis fugiat tempor aliqua. Ea nisi non Lorem voluptate anim quis do sunt pariatur quis. Mollit consectetur fugiat eiusmod fugiat aute est adipisicing pariatur aute nisi enim consequat. Dolore enim consequat consequat voluptate pariatur.\r\n",
  },
  {
    _id: "653e93fecb5d21afc049468f",
    name: "Hensley Lester",
    about:
      "Officia ipsum occaecat eu Lorem irure. Ipsum do culpa nulla eiusmod ipsum ex elit veniam ullamco Lorem. Labore cillum voluptate culpa dolor pariatur eiusmod cupidatat incididunt pariatur. Irure ullamco est veniam eiusmod ut aliqua mollit.\r\n",
  },
  {
    _id: "653e93fe8b626c38c31af4bb",
    name: "Debra Burton",
    about:
      "Nostrud deserunt mollit do incididunt officia. Esse do veniam ad ullamco ad amet ad veniam ad. Culpa sit consequat voluptate laboris cupidatat eu do ut et sunt et irure aute ut. Irure duis amet eiusmod aliquip qui elit esse. Proident ex veniam aute sint eu nulla veniam consectetur minim enim minim. Labore laborum enim aliquip ipsum qui aliqua.\r\n",
  },
];

const CommentItem = ({ user, content, date }) => {
  return (
    <div className="comment__item-wrapper">
      <div>
        <img
          src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <p className="comment__item-content-user">{user}</p>
        <p className="comment__item-content">{content}</p>
        <p className="comment__item-date">
          <BsCalendar2Date />
          {date}
        </p>
      </div>
    </div>
  );
};

const ListComment = () => {
  return (
    <div>
      <div className="list__comment-header">4 Comments</div>
      <div>
        {LIST_COMMENT?.map((item) => (
          <CommentItem
            key={item?._id}
            user={item?.name}
            content={item?.about}
            date={moment(new Date()).format("DD/MM/YYYY")}
          />
        ))}
      </div>
    </div>
  );
};

export default ListComment;
