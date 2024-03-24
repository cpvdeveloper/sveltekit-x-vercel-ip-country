/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const location = event.request.headers.get("x-vercel-ip-country");
  console.log(">>> hooks.server", location);

  const response = await resolve(event);
  return response;
}
