import React, { useEffect } from "react";
import { ApplyStatusType } from "../types";
import { ApplyStatusWrapper } from "./apply-status.styles";

interface ApplyStatusProps {
  applyStatus: ApplyStatusType | null;
  fetchApplyStatus: () => Promise<void>;
}

const ApplyStatus: React.FC<ApplyStatusProps> = ({
  applyStatus,
  fetchApplyStatus,
}) => {
  useEffect(() => {
    fetchApplyStatus();
  }, [fetchApplyStatus]);

  if (applyStatus === null) return null;

  return (
    <ApplyStatusWrapper>
      <div className="job--apply-status-top">
        <span className="job--apply-status-top-title">내 항목</span>
      </div>
      <div className="job--apply-status-bottom">
        <div className="job--apply-status-bottom-item">
          <div>나의 채용공고</div>
          <div className="job--apply-status-bottom-item-count">
            {applyStatus.myJobsCount}
          </div>
        </div>
        <div className="job--apply-status-bottom-item">
          <div>나의 온라인 클래스</div>
          <div className="job--apply-status-bottom-item-count">
            {applyStatus.myOnlineClassesCount}
          </div>
        </div>
        <div className="job--apply-status-bottom-item">
          <div>저장한 업데이트와 글</div>
          <div className="job--apply-status-bottom-item-count">
            {applyStatus.mySavedUpdatesCount}
          </div>
        </div>
      </div>
    </ApplyStatusWrapper>
  );
};

export default ApplyStatus;
