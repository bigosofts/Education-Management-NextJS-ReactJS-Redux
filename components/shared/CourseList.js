import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { selectData, deleteData } from "@/apiservices/courseapiservices";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

export default function CourseList() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const payload = await selectData(null, null);
      setData(payload);
    }
    fetchData();
  }, []);

  console.log(data);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Categories</TableCell>
            <TableCell align="right">Course Code</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.map((row) => (
            <TableRow className="course_list" key={row.name}>
              <TableCell component="th" scope="row">
                <Image
                  className="rounded-md"
                  src={row?.imageLink}
                  width={100}
                  height={100}
                />
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                className="text-lg font-bold"
              >
                {row?.title?.en}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                className="text-lg font-bold"
              >
                {row?.categories?.en}
              </TableCell>
              <TableCell align="right">
                <span className="text-sm p-2 bg-accent rounded-sm text-white">
                  {row?.courseCode}
                </span>
              </TableCell>
              <TableCell align="right">
                {row?.activeStatus === "active" ? (
                  <button className="text-sm bg-green-600 p-[2px] px-2 rounded-3xl text-white ">
                    Active
                  </button>
                ) : (
                  <button
                    disabled={true}
                    className="text-sm border-2 border-blue-600 rounded-3xl"
                  >
                    {row?.activeStatus}
                  </button>
                )}
              </TableCell>
              <TableCell align="right">
                {row?.courseCode && (
                  <Link
                    href={
                      row?.courseCode
                        ? `/content/classes/${row?.courseCode}`
                        : "#"
                    }
                    passHref
                  >
                    <Button variant="outlined" disabled={!row?.courseCode}>
                      View
                    </Button>
                  </Link>
                )}

                <Button>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
