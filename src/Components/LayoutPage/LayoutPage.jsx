import './LayoutPage.css';

export const LayoutPage = ({ children, aside }) => (
  <section className="layout-page">
    <div className="main-content">{children}</div>
    <div className="aside-content">{aside}</div>
  </section>
);

/* LayoutPage.propTypes = {
  children: PropTypes.element,
  layout: PropTypes.oneOf(['simple', 'detail'])
}; */
