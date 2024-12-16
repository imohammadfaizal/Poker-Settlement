import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

function PlayerTable({ playerArray }) {

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="width-260">
                <TableSortLabel>NAME</TableSortLabel>
              </TableCell>
              <TableCell className="width-196">
                <TableSortLabel>BOOT</TableSortLabel>
              </TableCell>
              <TableCell className="width-196">
                <TableSortLabel>FINAL</TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerArray.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.playerName}</TableCell>
                <TableCell>{row.playerBootAmt}</TableCell>
                <TableCell>{row.playerFinalAmt}</TableCell>
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

export default PlayerTable;
