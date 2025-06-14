const whatsappChannelLink = "https://whatsapp.com/channel/0029VbANIT5D8SDpK7oExi1v";

const menu = () => {
  return `
╔═══❖•ೋ° °ೋ•❖═══╗
      *REY47_BUG-MD*
╚═══❖•ೋ° °ೋ•❖═══╝

🛠️ *Bug Bot Commands* 🛠️

1. 🐞 *Report Bug*
   Usage: !report <bug_description>
   Report a new bug to the dev team.

2. 🔍 *Check Bug Status*
   Usage: !status <bug_id>
   Check the status of your reported bug.

3. 📋 *Bug List*
   Usage: !buglist
   View all open bugs.

4. 🆘 *Help*
   Usage: !help
   Show this menu.

5. 🌐 *Join Our WhatsApp Channel*
   ${whatsappChannelLink}

═══════════════════════
*Powered by REY47_BUG-MD*
  `;
};

module.exports = { menu };
