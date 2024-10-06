(this.webpackJsonpnewsapp = this.webpackJsonpnewsapp || []).push([
  [0],
  {
    26: function (e, a, t) {},
    27: function (e, a, t) {},
    35: function (e, a, t) {
      "use strict";
      t.r(a);
      var s = t(0),
        c = t.n(s),
        n = t(18),
        A = t.n(n),
        r = (t(26), t(9)),
        i = (t(27), t(6)),
        l = t(1),
        o = function () {
          return Object(l.jsx)("div", {
            children: Object(l.jsx)("nav", {
              className:
                "navbar fixed-top navbar-expand-lg navbar-dark bg-dark",
              children: Object(l.jsxs)("div", {
                className: "container-fluid",
                children: [
                  Object(l.jsx)(i.b, {
                    className: "navbar-brand",
                    to: "/",
                    children: "trellingNews",
                  }),
                  Object(l.jsx)("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: Object(l.jsx)("span", {
                      className: "navbar-toggler-icon",
                    }),
                  }),
                  Object(l.jsx)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: Object(l.jsxs)("ul", {
                      className: "navbar-nav me-auto mb-2 mb-lg-0",
                      children: [
                        Object(l.jsx)("li", {
                          className: "nav-item",
                          children: Object(l.jsx)(i.b, {
                            className: "nav-link",
                            "aria-current": "page",
                            to: "/",
                            children: "Home",
                          }),
                        }),
                        Object(l.jsx)("li", {
                          className: "nav-item",
                          children: Object(l.jsx)(i.b, {
                            className: "nav-link",
                            to: "/business",
                            children: "Business",
                          }),
                        }),
                        Object(l.jsx)("li", {
                          className: "nav-item",
                          children: Object(l.jsx)(i.b, {
                            className: "nav-link",
                            to: "/entertainment",
                            children: "Entertainment",
                          }),
                        }),
                        Object(l.jsx)("li", {
                          className: "nav-item",
                          children: Object(l.jsx)(i.b, {
                            className: "nav-link",
                            to: "/general",
                            children: "General",
                          }),
                        }),
                        Object(l.jsx)("li", {
                          className: "nav-item",
                          children: Object(l.jsx)(i.b, {
                            className: "nav-link",
                            to: "/health",
                            children: "Health",
                          }),
                        }),
                        Object(l.jsx)("li", {
                          className: "nav-item",
                          children: Object(l.jsx)(i.b, {
                            className: "nav-link",
                            to: "/science",
                            children: "Science",
                          }),
                        }),
                        Object(l.jsx)("li", {
                          className: "nav-item",
                          children: Object(l.jsx)(i.b, {
                            className: "nav-link",
                            to: "/sports",
                            children: "Sports",
                          }),
                        }),
                        Object(l.jsx)("li", {
                          className: "nav-item",
                          children: Object(l.jsx)(i.b, {
                            className: "nav-link",
                            to: "/technology",
                            children: "Technology",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        g = t(11),
        h = t.n(g),
        j = t(16),
        d = function (e) {
          var a = e.title,
            t = e.description,
            s = e.imageUrl,
            c = e.newsUrl,
            n = e.author,
            A = e.date,
            r = e.source;
          return Object(l.jsx)("div", {
            className: "my-3",
            children: Object(l.jsxs)("div", {
              className: "card",
              children: [
                Object(l.jsx)("div", {
                  style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                    right: "0",
                  },
                  children: Object(l.jsxs)("span", {
                    className: "badge rounded-pill bg-danger",
                    children: [" ", r, " "],
                  }),
                }),
                Object(l.jsx)("img", {
                  src:
                    s ||
                    "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg",
                  className: "card-img-top",
                  alt: "...",
                }),
                Object(l.jsxs)("div", {
                  className: "card-body",
                  children: [
                    Object(l.jsxs)("h5", {
                      className: "card-title",
                      children: [a, "  "],
                    }),
                    Object(l.jsx)("p", { className: "card-text", children: t }),
                    Object(l.jsx)("p", {
                      className: "card-text",
                      children: Object(l.jsxs)("small", {
                        className: "text-muted",
                        children: [
                          "By ",
                          n || "Unknown",
                          " on  ",
                          new Date(A).toGMTString(),
                        ],
                      }),
                    }),
                    Object(l.jsx)("a", {
                      rel: "noreferrer",
                      href: c,
                      target: "_blank",
                      className: "btn btn-sm btn-dark",
                      children: "Read More",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        p = function () {
          return Object(l.jsx)("div", {
            className: "text-center",
            children: Object(l.jsx)("img", {
              className: "my-3",
              src: "data:image/gif;base64,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",
              alt: "loading",
            }),
          });
        },
        b = t(20),
        x = function (e) {
          var a = Object(s.useState)([]),
            t = Object(r.a)(a, 2),
            c = t[0],
            n = t[1],
            A = Object(s.useState)(!0),
            i = Object(r.a)(A, 2),
            o = i[0],
            g = i[1],
            x = Object(s.useState)(1),
            O = Object(r.a)(x, 2),
            m = O[0],
            u = O[1],
            C = Object(s.useState)(0),
            I = Object(r.a)(C, 2),
            B = I[0],
            S = I[1],
            w = "b7aab4c3217946de9a7fec2a86f19e73",
            N = function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            },
            y = (function () {
              var a = Object(j.a)(
                h.a.mark(function a() {
                  var t, s, c;
                  return h.a.wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            e.setProgress(10),
                            (t =
                              "https://newsapi.org/v2/top-headlines?&category="
                                .concat(e.category, "&apiKey=")
                                .concat(w, "&page=")
                                .concat(m, "&pageSize=")
                                .concat(e.pageSize)),
                            g(!0),
                            (a.next = 5),
                            fetch(t)
                          );
                        case 5:
                          return (
                            (s = a.sent),
                            e.setProgress(30),
                            (a.next = 9),
                            s.json()
                          );
                        case 9:
                          (c = a.sent),
                            e.setProgress(70),
                            n(c.articles),
                            S(c.totalResults),
                            g(!1),
                            e.setProgress(100);
                        case 15:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              );
              return function () {
                return a.apply(this, arguments);
              };
            })();
          Object(s.useEffect)(function () {
            (document.title = "".concat(N(e.category), " - trellingNews")), y();
          }, []);
          var k = (function () {
            var a = Object(j.a)(
              h.a.mark(function a() {
                var t, s, A;
                return h.a.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (t = "https://newsapi.org/v2/top-headlines?&category="
                            .concat(e.category, "&apiKey=")
                            .concat(w, "&page=")
                            .concat(m + 1, "&pageSize=")
                            .concat(e.pageSize)),
                          u(m + 1),
                          (a.next = 4),
                          fetch(t)
                        );
                      case 4:
                        return (s = a.sent), (a.next = 7), s.json();
                      case 7:
                        (A = a.sent),
                          n(c.concat(A.articles)),
                          S(A.totalResults);
                      case 10:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            );
            return function () {
              return a.apply(this, arguments);
            };
          })();
          return Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsxs)("h1", {
                className: "text-center",
                style: { margin: "35px 0px", marginTop: "90px" },
                children: ["trellingNews - Top ", N(e.category), " Headlines"],
              }),
              o && Object(l.jsx)(p, {}),
              Object(l.jsx)(b.a, {
                dataLength: c.length,
                next: k,
                hasMore: c.length !== B,
                loader: Object(l.jsx)(p, {}),
                children: Object(l.jsx)("div", {
                  className: "container",
                  children: Object(l.jsx)("div", {
                    className: "row",
                    children: c.map(function (e) {
                      return Object(l.jsx)(
                        "div",
                        {
                          className: "col-md-4",
                          children: Object(l.jsx)(d, {
                            title: e.title ? e.title : "",
                            description: e.description ? e.description : "",
                            imageUrl: e.urlToImage,
                            newsUrl: e.url,
                            author: e.author,
                            date: e.publishedAt,
                            source: e.source.name,
                          }),
                        },
                        e.url
                      );
                    }),
                  }),
                }),
              }),
            ],
          });
        };
      x.defaultProps = { country: "in", pageSize: 8, category: "general" };
      var O = x,
        m = t(2),
        u = t(21),
        C = function () {
          var e = "b7aab4c3217946de9a7fec2a86f19e73",
            a = Object(s.useState)(0),
            t = Object(r.a)(a, 2),
            c = t[0],
            n = t[1];
          return Object(l.jsx)("div", {
            children: Object(l.jsxs)(i.a, {
              children: [
                Object(l.jsx)(o, {}),
                Object(l.jsx)(u.a, {
                  height: 3,
                  color: "#f11946",
                  progress: c,
                }),
                Object(l.jsxs)(m.c, {
                  children: [
                    Object(l.jsx)(m.a, {
                      exact: !0,
                      path: "/",
                      children: Object(l.jsx)(
                        O,
                        {
                          setProgress: n,
                          apiKey: e,
                          pageSize: 5,
                          country: "in",
                          category: "general",
                        },
                        "general"
                      ),
                    }),
                    Object(l.jsx)(m.a, {
                      exact: !0,
                      path: "/business",
                      children: Object(l.jsx)(
                        O,
                        {
                          setProgress: n,
                          apiKey: e,
                          pageSize: 5,
                          country: "in",
                          category: "business",
                        },
                        "business"
                      ),
                    }),
                    Object(l.jsx)(m.a, {
                      exact: !0,
                      path: "/entertainment",
                      children: Object(l.jsx)(
                        O,
                        {
                          setProgress: n,
                          apiKey: e,
                          pageSize: 5,
                          country: "in",
                          category: "entertainment",
                        },
                        "entertainment"
                      ),
                    }),
                    Object(l.jsx)(m.a, {
                      exact: !0,
                      path: "/general",
                      children: Object(l.jsx)(
                        O,
                        {
                          setProgress: n,
                          apiKey: e,
                          pageSize: 5,
                          country: "in",
                          category: "general",
                        },
                        "general"
                      ),
                    }),
                    Object(l.jsx)(m.a, {
                      exact: !0,
                      path: "/health",
                      children: Object(l.jsx)(
                        O,
                        {
                          setProgress: n,
                          apiKey: e,
                          pageSize: 5,
                          country: "in",
                          category: "health",
                        },
                        "health"
                      ),
                    }),
                    Object(l.jsx)(m.a, {
                      exact: !0,
                      path: "/science",
                      children: Object(l.jsx)(
                        O,
                        {
                          setProgress: n,
                          apiKey: e,
                          pageSize: 5,
                          country: "in",
                          category: "science",
                        },
                        "science"
                      ),
                    }),
                    Object(l.jsx)(m.a, {
                      exact: !0,
                      path: "/sports",
                      children: Object(l.jsx)(
                        O,
                        {
                          setProgress: n,
                          apiKey: e,
                          pageSize: 5,
                          country: "in",
                          category: "sports",
                        },
                        "sports"
                      ),
                    }),
                    Object(l.jsx)(m.a, {
                      exact: !0,
                      path: "/technology",
                      children: Object(l.jsx)(
                        O,
                        {
                          setProgress: n,
                          apiKey: e,
                          pageSize: 5,
                          country: "in",
                          category: "technology",
                        },
                        "technology"
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        I = function (e) {
          e &&
            e instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 36))
              .then(function (a) {
                var t = a.getCLS,
                  s = a.getFID,
                  c = a.getFCP,
                  n = a.getLCP,
                  A = a.getTTFB;
                t(e), s(e), c(e), n(e), A(e);
              });
        };
      A.a.render(
        Object(l.jsx)(c.a.StrictMode, { children: Object(l.jsx)(C, {}) }),
        document.getElementById("root")
      ),
        I();
    },
  },
  [[35, 1, 2]],
]);
//# sourceMappingURL=main.30888fa0.chunk.js.map
