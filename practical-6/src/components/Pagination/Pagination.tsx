import "./Pagination.css";

interface PageProps {
  paginationItems: JSX.Element[] | undefined
}
const Pagination = (props: PageProps) => {
  console.log(props.paginationItems);
  return (
    <div className="Pagination">
      {props.paginationItems}
    </div>
  );
};
export default Pagination;
