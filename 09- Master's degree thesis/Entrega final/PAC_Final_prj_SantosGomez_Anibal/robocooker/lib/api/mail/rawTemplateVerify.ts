const { WEB_URI } = process.env;

const rawTemplateVerify = ({
  username,
  tokenId,
}: {
  username: Username;
  tokenId: TokenId;
}) => `
      <div>
        <p>Hola, @${username}!</p>
        <p>Por favor accede <a href="${WEB_URI}/verify/${tokenId}">aquí</a> para verificar tu cuenta.</p>
      </div>
      `;

export default rawTemplateVerify;
