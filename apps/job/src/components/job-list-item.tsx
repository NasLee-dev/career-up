import React, { useCallback } from "react";
import { JobListItemWrapper } from "./job-list-item.styles";
import IconDefault from "../assets/icon-default";
import { useNavigate } from "react-router-dom";

interface JobListItemProps {
  id: number;
  company: string;
  position: string;
  location: string;
}

const JobListItem: React.FC<JobListItemProps> = ({
  id,
  company,
  position,
  location,
}) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`${id}`);
  }, [id, navigate]);
  return (
    <JobListItemWrapper onClick={handleClick}>
      <div className="job--job-list-item-left">
        <IconDefault />
      </div>
      <div className="job--job-list-item-right">
        <div className="job--job-list-item-right-position">{position}</div>
        <div className="job--job-list-item-right-company">{company}</div>
        <div className="job--job-list-item-right-location">{location}</div>
      </div>
    </JobListItemWrapper>
  );
};

export default JobListItem;
