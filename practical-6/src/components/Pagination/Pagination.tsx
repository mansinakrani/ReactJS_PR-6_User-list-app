import "./Pagination.css"

interface PageProps {
  paginationItems: JSX.Element[] | undefined
}
const Pagination = (props: PageProps) => {
  return (
    <div className="Pagination-body" >
    <div className="Pagination">
      {props.paginationItems}
    </div>
    </div>
  );
};
export default Pagination;
