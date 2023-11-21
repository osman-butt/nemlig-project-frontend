import image from "../assets/hero.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from "../components/Table";

function Adminpage() {
  return (
    <>
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Header />
        <div className="max-w-[1240px] p-4 w-full mx-auto text-center rounded flex flex-col font-general bg-[#e8e3d8]">
          <h1 className="text-3xl font-bold">Admin page</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell className={"hidden md:block"}>
                  1
                </TableHeaderCell>
                <TableHeaderCell>2</TableHeaderCell>
                <TableHeaderCell>3</TableHeaderCell>
                <TableHeaderCell>4</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={"hidden md:block text-center"}>
                  ROW1
                </TableCell>
                <TableCell className={"text-center"}>ROW2</TableCell>
                <TableCell className={"text-center"}>ROW3</TableCell>
                <TableCell className={"text-center"}>ROW4</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Adminpage;
