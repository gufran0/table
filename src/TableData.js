import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function TableData({visible,data}) {

  const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(12),
    },
    font: {
      fontSize: "18px",
    },
    color: {
      color: "#DCDCDC",
    },
  }));
  const classes = useStyles();
  return ( visible && 
    <React.Fragment>
      <Table size="small" className="table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.font}>Date</TableCell>
            <TableCell className={classes.font}>Name</TableCell>
            <TableCell className={classes.font} align="center">
              Announcement
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </React.Fragment>
  );
}