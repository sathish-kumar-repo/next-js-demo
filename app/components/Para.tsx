export default async function Para() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await res.json();

  return (
    <div>
      <h2>User: {user.name}</h2>
      <p>Email: {user.email}</p>

      <hr />

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos
        provident, nostrum consequatur atque libero pariatur explicabo, omnis
        blanditiis doloribus ab reiciendis voluptas. Et molestias, voluptates
        dolore deserunt corrupti corporis optio aliquid odit aut laboriosam
        dolorem natus dolores nisi quia, nesciunt quam debitis officia sapiente
        quos! Cumque voluptas eveniet laboriosam debitis quod voluptates
        praesentium, alias quas eos exercitationem, nemo dolore excepturi, harum
        veniam sint? Quod, placeat recusandae ipsam impedit aliquam quisquam.
      </p>
    </div>
  );
}
