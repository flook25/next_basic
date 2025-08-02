// import SeverComponent from "../server-component/page";
// import ClientComponent from "../client-component/page";
// import Header from "../props/page";
// import UserProfile from "../multi-props/page";

// export default function Page() {
//     return ( // <-- Move the opening parenthesis to the same line as 'return'
//         <>

//             <div>Header and Props</div>
//             <Header title="flook"/>

//             <div>Server Component</div> {/* Corrected typo: Sever -> Server */}
//             <SeverComponent />

//             <div>Client Component</div>
//             <ClientComponent />

//             <div>Multi Props</div>
//             <UserProfile name="py" age={23} email="py@gmail.com" isAdmin={true}/>
//         </>
//     );
// }


import ServerComponent from '../server-component/page';
import ClientComponent from '../client-component/page';
import Header from '../props/page';
import UserProfile from '../multi-props/page';

/**
 * A page component to showcase various React components.
 * Styled with Tailwind CSS for a modern, utility-first approach.
 */
const ComponentsShowcasePage = () => {
  // Grouping props for components that require several properties.
  // This improves readability and makes the component easier to manage.
  const user = {
    name: 'py',
    age: 23,
    email: 'py@gmail.com',
    isAdmin: true,
  };

  return (
    // Using a main tag for semantic HTML and a dark theme for the background.
    <main className="bg-gray-900 text-white min-h-screen font-sans p-8">
      <div className="max-w-4xl mx-auto">
        <Header title="Component Showcase" />

        {/* Using a grid layout for a clean, organized structure. */}
        <div className="mt-12 grid gap-10">
          {/* Server Component Section */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-teal-400">
              Server Component
            </h2>
            <p className="text-gray-400 mb-4">
              This component is rendered on the server, improving initial load times.
            </p>
            {/* The typo 'SeverComponent' has been corrected to 'ServerComponent' */}
            <ServerComponent />
          </section>

          {/* Client Component Section */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-teal-400">
              Client Component
            </h2>
            <p className="text-gray-400 mb-4">
              This component is rendered in the browser, allowing for interactivity.
            </p>
            <ClientComponent />
          </section>

          {/* Multi-Props Component Section */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-teal-400">
              Component with Multiple Props
            </h2>
            <p className="text-gray-400 mb-4">
              This demonstrates passing multiple props efficiently using an object.
            </p>
            {/* Using the spread operator (...) to pass props is clean and scalable. */}
            <UserProfile {...user} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default ComponentsShowcasePage;