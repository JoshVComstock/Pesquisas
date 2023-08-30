import React from "react";
import styled from "styled-components";


const Pagination = ({
  registrosPorPagina,
  totalRegistros,
  paginaActual,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalRegistros / registrosPorPagina);

  const handlePageClick = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    onPageChange(page);
  };

  const renderPaginationItems = () => {
    const items = [];

    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Ul
          key={i}
          className={`pagination-item ${i === paginaActual ? "active" : ""}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Ul>
      );
    }

    return items;
  };

  return (
    <>
      <Img src="" alt="" />
      <Padre>{renderPaginationItems()}</Padre>
    </>
  );
};

export default Pagination;
const Padre = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const Ul = styled.a`
  color: #146ae3;
  display: flex;
  justify-content: center;
  width: 25px;
  cursor: pointer;
  border-bottom: 1px solid #fff;
  border-radius: 3px;
  margin: 4px;
  &:hover {
    background: #2878e8;
    color: #fff;
    border-bottom: 1px solid #000;
  }
`;
const Img=styled.img`
    width: 20px;
    background: #000;
`;
