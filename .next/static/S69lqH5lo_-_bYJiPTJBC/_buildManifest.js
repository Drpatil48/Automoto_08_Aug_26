self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "source": "/wp-json/:path*"
      },
      {
        "source": "/wp-admin/:path*"
      },
      {
        "source": "/wp-content/:path*"
      },
      {
        "source": "/wp-includes/:path*"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()