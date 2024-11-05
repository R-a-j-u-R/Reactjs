function One() {
  return <div>One</div>;
}
function Two() {
  return (
    <div>
      Two
      <Hoc One={One} />
    </div>
  );
}
function Hoc({ One }) {
  return <div>Hoc{One()}</div>;
}

export default Two;
