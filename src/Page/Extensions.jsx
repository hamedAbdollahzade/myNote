const Extensions = () => {
  const ex = [
    "Live Server",
    "Better Comments",
    "Auto Rename Tag",
    "Auto Rename Tag",
    "Blackbox",
    "Code Spell Checker",
    "Color Highlight",
    "Easy icon theme",
    "ES7+ React/Redux/React-Native snippets",
    "ESLint",
    "GitLens — Git supercharged",
    "Import Cost",
    "Prettier - Code formatter",
    "Quokka.js",
    "Tabnine",
    "Tailwind CSS IntelliSense",
  ];

  return (
    <div className="min-h-screen bg-red-400">
      <h1 className="text-4xl p-2 font-bold">vs code extensions for front end developer :</h1>
      <div className="p-4">
        <ul>
          {ex.map((item, index) => (
            <li key={index}>
              {" "}
              {index + 1} - {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Extensions;
