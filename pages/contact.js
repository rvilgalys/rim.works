import Layout from "../components/Layout";
import NavHeader from "../components/NavHeader";

const Contact = () => {
  return (
    <Layout>
      <NavHeader pathname="/contact"></NavHeader>
      {/* <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script> */}
      <section className="w-full flex flex-col items-center">
        <iframe
          className="w-full sm:w-2/3"
          src="https://airtable.com/embed/shrILZ1semuzi3m6w?backgroundColor=purple"
          width="100%"
          height="773"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Contact;
