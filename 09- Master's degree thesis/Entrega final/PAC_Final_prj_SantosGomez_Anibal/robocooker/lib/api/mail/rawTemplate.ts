const { WEB_URI } = process.env;

const rawTemplate = ({
  username,
  tokenId,
}: {
  username: Username;
  tokenId: TokenId;
}) => `
      <div>
        <p>Hola, @${username}!</p>
        <p>Por favor accede <a href="${WEB_URI}/recovery/${tokenId}">aquí</a> para recuperar tu contraseña.</p>
      </div>
      `;

export default rawTemplate;
