import React from "react";
import { Box } from "jsxstyle";

export const Table = ({ children, ...props }) => (
  <Box
    component="table"
    borderCollapse="separate"
    borderSpacing={1}
    props={props}
  >
    {children}
  </Box>
);

export const TCell = ({ children, top, name, onClick, Collapse, ...props }) => (
  <Box
    component="row"
    padding="5px 10px"
    verticalAlign="top"
    props={props}
    textAlign="left"
  >
    {children}
  </Box>
);
