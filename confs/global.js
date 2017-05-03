module.exports = {
  port: 80,
  errorMail: $package.author.split("<")[1].split(">")[0],
  jokerToken: "BLYAD",
  requestTimeout: 5 * 1000,
  mail: {
    from: "sozluk@post.com",
    smtp: "smtp.mail.com",
    password: ""
  },
  randomCount: 5,
  ids: ['entries_inc', 'topics_inc']
};
