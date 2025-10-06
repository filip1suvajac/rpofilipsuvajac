const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-6 shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Razvoj programske opreme</h1>
        <p className="text-xl font-medium">To je sprememba, ki jo potrebujem za <span className="italic">git stash</span></p>
        <p>To pa je čisto drugi paragraf</p>
      </div>
    </header>
  );
};

export default Header;
