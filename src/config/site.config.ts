export const siteConfig = {
  title: "Popular recipes",
  description: "A platform for sharing recipes",
  navItems: [
    { label: "Recipes", href: "/" },
    { label: "Ingredients", href: "/ingredients" },
    { label: "About us", href: "/about-us" },
  ],
  pagesContent: {
    "/": {
      content: "There will be recipes here..."
    },
    "/ingredients": {
      content: "Popular Ingredients..."
    },
    "/about-us": {
      content: `
      <p>We believe that good food brings people together.</p>
      </br>
      <p>Our website was created for everyone who loves cooking — whether you’re preparing your very first 
         homemade meal or experimenting with new flavors in the kitchen. We share recipes that are simple, 
         honest, and made to be enjoyed, using ingredients you can actually find and techniques you don’t 
         need a culinary degree to master.
      </p>
      </br>
      <h3><b>Our Philosophy</b></h3>
      </br>
      <p>Cooking shouldn’t be stressful or complicated.</p>
      <p>It should be:
        <ul>
          <li>🍳 Accessible — clear steps, no unnecessary complexity</li>
          <li>🌿 Balanced — everyday meals and special treats</li>
          <li>❤️ Made with care — for yourself, your family, and your friends</li>
        </ul>
      </p>
      </br>
      <p>Every recipe you find here is tested, refined, and written with real home cooks in mind.</p>
      </br>
      <h3><b>What You’ll Find Here</b></h3>
      <ul>
        <li>Tried-and-true everyday recipes</li>
        <li>Comfort food and seasonal favorites</li>
        <li>Practical tips that actually help</li>
        <li>Inspiration to cook more — and enjoy it</li>
      </ul>
      </br>
      <p>
         We focus on quality over quantity, preferring fewer great recipes over endless variations 
         that never get used.
      </p>
      </br>
      <h3><b>Why We Do This</b></h3>
      </br>
      <p>
        Because food is more than calories.</br>
        It’s memories, culture, and small moments that matter.
      </p>
      </br>
      <p>
        If our recipes help you cook with more confidence, discover a new favorite dish, 
        or simply enjoy the process a little more — then we’re doing exactly what we set out to do.
      </p>
      </br>
      <p>Thank you for being here and cooking with us 💛</p>`
    }
  },
  notFound: "Page not found",
};
