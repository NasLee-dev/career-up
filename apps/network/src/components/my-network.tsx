import React, { useEffect } from "react";
import { MyNetworkType } from "../types";
import * as css from "./my-network.css";

interface MyNetworkProps {
  myNetwork: MyNetworkType | null;
  fetchMyNetwork: () => Promise<void>;
}

const MyNetwork: React.FC<MyNetworkProps> = ({ myNetwork, fetchMyNetwork }) => {
  useEffect(() => {
    fetchMyNetwork();
  }, [fetchMyNetwork]);

  if (myNetwork === null) return null;

  const {
    connectionCount,
    contactCount,
    eventCount,
    pageCount,
    user: { name, email, picture },
  } = myNetwork;

  return (
    <div>
      <div className={css.topArea}>
        <span className={css.topAreaTitle}>인맥 관리</span>
      </div>
      <div className={css.topAreaLinks}>
        <div className={css.topAreaLink}>
          <div>1촌</div>
          <div>
            {css.topAreaLinkCount}
            {connectionCount}
          </div>
        </div>

        <div className={css.topAreaLink}>
          <div>연락처</div>
          <div>
            {css.topAreaLinkCount}
            {contactCount}
          </div>
        </div>
        <div className={css.topAreaLink}>
          <div>이벤트</div>
          <div>
            {css.topAreaLinkCount}
            {eventCount}
          </div>
        </div>
        <div className={css.topAreaLink}>
          <div>페이지</div>
          <div>
            {css.topAreaLinkCount}
            {pageCount}
          </div>
        </div>
      </div>
      <div className={css.bottomArea}>
        <img className={css.img} src={picture} />
        <div className={css.name}>{name}</div>
        <div className={css.email}>{email}</div>
      </div>
    </div>
  );
};

export default MyNetwork;
