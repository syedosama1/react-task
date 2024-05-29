import React, { useState } from "react";
import "../components/Pagination.css";
const PaginationTable = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      membershipNum: "Abc123",
      memberName: "Mari Kim",
      phoneNumber: "010-1234-5678",
      emailId: "aaaaaaaabc@naver.com",
      approval: "Approved",
      dormantState: "normal",
      division: "inves",
      category: "general individual",
      guid: "U1JtXgAj5Q72Wn",
    },
    {
      id: 2,
      membershipNum: "Def456",
      memberName: "John Doe",
      phoneNumber: "010-9876-5432",
      emailId: "john.doe@example.com",
      approval: "Waiting for approval",
      dormantState: "normal",
      division: "inves",
      category: "general individual",
      guid: "U1JtXgAj5Q72Wn",
    },
    {
      id: 3,
      membershipNum: "Ghi789",
      memberName: "Jane Smith",
      phoneNumber: "010-5678-1234",
      emailId: "jane.smith@example.com",
      approval: "Pending approval",
      dormantState: "normal",
      division: "inves",
      category: "general individual",
      guid: "U1JtXgAj5Q72Wn",
    },
    {
      id: 4,
      membershipNum: "Jkl012",
      memberName: "Alex Brown",
      phoneNumber: "010-5432-8765",
      emailId: "alex.brown@example.com",
      approval: "Rejected",
      dormantState: "normal",
      division: "inves",
      category: "general individual",
      guid: "U1JtXgAj5Q72Wn",
    },
    {
      id: 5,
      membershipNum: "Mno345",
      memberName: "Emily Davis",
      phoneNumber: "010-2345-6789",
      emailId: "emily.davis@example.com",
      approval: "Approved",
      dormantState: "normal",
      division: "inves",
      category: "general individual",
      guid: "U1JtXgAj5Q72Wn",
    },
    {
      id: 6,
      membershipNum: "Pqr678",
      memberName: "Michael Lee",
      phoneNumber: "010-8765-4321",
      emailId: "michael.lee@example.com",
      approval: "Approved",
      dormantState: "normal",
      division: "inves",
      category: "general individual",
      guid: "U1JtXgAj5Q72Wn",
    },
  ]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);

  const handleCheckboxChange = (memberId) => {
    const updatedSelectedMembers = selectedMembers.includes(memberId)
      ? selectedMembers.filter((id) => id !== memberId)
      : [...selectedMembers, memberId];
    setSelectedMembers(updatedSelectedMembers);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = members.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(members.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="member-list">
      <h2>Member List</h2>
      <p>
        (Total <span style={{ color: "red" }}>100</span> people | 10 waiting for
        approval)
      </p>
      <div className="controls">
        <select>
          <option value="date">Sorted by date of approval</option>
        </select>
        <select>
          <option value="50">View 50 each</option>
        </select>
        <button>Excel Download</button>
        <p>{selectedMembers.length} members selected</p>
        <select>
          <option value="change">Change Ap...</option>
        </select>
        <button>Save</button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>No</th>
            <th>Membership Num...</th>
            <th>Member Name/Co...</th>
            <th>Phone Number</th>
            <th>Email ID</th>
            <th>Approval</th>
            <th>Dormant State</th>
            <th>Division</th>
            <th>Category</th>
            <th>GUID</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((member) => (
            <tr key={member.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedMembers.includes(member.id)}
                  onChange={() => handleCheckboxChange(member.id)}
                />
              </td>
              <td>{member.id}</td>
              <td>{member.membershipNum}</td>
              <td>{member.memberName}</td>
              <td>{member.phoneNumber}</td>
              <td>{member.emailId}</td>
              <td>
                <span
                  className={
                    member.approval === "Approved"
                      ? "approval-approved"
                      : member.approval === "Waiting for approval"
                      ? "approval-pending"
                      : "approval-rejected"
                  }
                >
                  {member.approval}
                </span>
              </td>
              <td>{member.dormantState}</td>
              <td>{member.division}</td>
              <td>{member.category}</td>
              <td>{member.guid}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationTable;
