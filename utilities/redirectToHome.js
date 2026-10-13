export default async function redirectToHome() {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
}
