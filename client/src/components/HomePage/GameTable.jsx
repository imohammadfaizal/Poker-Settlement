import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
  TableSortLabel,
} from "@mui/material";

function GameTable({ gameData, setView, setPlayerArray }) {

  function handleClick(evt){
    setView("players")
    let pos = evt.target.dataset.id
    setPlayerArray(gameData[pos].players)
  }

  useEffect(() => {
    if(gameData.length > 0){
      console.log(gameData[0].players);
    }
  }, [gameData])
  
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="width-260">
                <TableSortLabel>GAME</TableSortLabel>
              </TableCell>
              <TableCell className="width-196">
                <TableSortLabel>DATE</TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gameData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link href={row.url} onClick={handleClick} data-id={index} role="button" rel="noopener">
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <div className="pagination-container d-flex align-items-center justify-content-between">
            <TablePagination
              component="div"
              count={patientData.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[]}
              ActionsComponent="false"
              labelDisplayedRows={({ from, to, count }) =>
                `Showing ${from}-${to} of ${count}`
              }
            />
            <PaginationWrapper>
              <PageButton
                onClick={() => handleChangePage(null, page - 1)}
                disabled={page === 0}
              >
                {page === 0 ? (
                  <img
                    className="arrow-icon"
                    src={`${config.mediaBaseUrl}/left-long-arrow-disabled.svg`}
                    alt="Left Arrow Disabled"
                  />
                ) : (
                  <img
                    className="arrow-icon"
                    src={`${config.mediaBaseUrl}/left-long-arrow.svg`}
                    alt="Ledt Arrow"
                  />
                )}
              </PageButton>

              {Array.from({ length: totalPages }, (_, index) => (
                <PageButton
                  key={index}
                  active={index === page ? 1 : 0}
                  onClick={() => handleChangePage(null, index)}
                >
                  {index + 1}
                </PageButton>
              ))}
              <PageButton
                onClick={() => handleChangePage(null, page + 1)}
                disabled={page === totalPages - 1}
              >
                {page === totalPages - 1 ? (
                  <img
                    className="arrow-icon"
                    src={`${config.mediaBaseUrl}/arrow-icon-disabled.svg`}
                    alt="Right Arrow Disabled"
                  />
                ) : (
                  <img
                    className="arrow-icon"
                    src={`${config.mediaBaseUrl}/arrow-icon-blue.svg`}
                    alt="Right Arrow"
                  />
                )}
              </PageButton>
            </PaginationWrapper>
          </div> */}
    </>
  );
}

export default GameTable;
