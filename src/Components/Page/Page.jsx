import './Page.css';

export const Page = ({ children, title }) => (
  <div className="page">
    <h1 className="page-title">{title}</h1>
    <section className="page-content">{children}</section>
  </div>
);
