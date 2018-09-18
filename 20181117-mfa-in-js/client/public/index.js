{
  const API_HOST = "https://localhost:8000";
  const fetchApi = (path, ...init) => fetch(`${API_HOST}${path}`, ...init);

  document.querySelector("form:first-of-type").addEventListener("submit", async e => {
    e.preventDefault();

    const response = await fetchApi("/u2f/request/1");
    const registrationRequest = await response.json();

    console.log({ registrationRequest });

    u2f.register(
      registrationRequest.appId,
      [registrationRequest],
      [],
      async registrationResponse => {
        console.log({ registrationResponse });
        const response = await fetchApi("/u2f/checkRegistration/2", {
          body: JSON.stringify(registrationResponse),
          headers: { "content-type": "application/json" },
          method: "POST"
        });
        const registrationResult = await response.json();
        console.log({ registrationResult });
      }
    );
  }, false)

  document.querySelector("form:last-of-type").addEventListener("submit", async e => {
    e.preventDefault();

    const response = await fetchApi("/u2f/request/2");
    const authenticateRequest = await response.json();

    console.log({ authenticateRequest });

    u2f.sign(
      authenticateRequest.appId,
      authenticateRequest.challenge,
      [authenticateRequest],
      async authenticateResponse => {
        console.log({ authenticateResponse });
        const response = await fetchApi("/u2f/checkSignature/3", {
          body: JSON.stringify(authenticateResponse),
          headers: { "content-type": "application/json" },
          method: "POST"
        });
        const authenticateResult = await response.json();
        console.log({ authenticateResult });
      }
    );
  }, false)
}
