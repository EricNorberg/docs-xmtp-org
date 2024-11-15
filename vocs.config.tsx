import { defineConfig } from "vocs";

// console.log('Loading Vocs config...')

export default defineConfig({
  head: () => {
    // console.log(`Generating head content... ${new Date().toISOString()}`)
    // track analytics to see if the prompt to read the latest docs is working
    return (
      <>
        <script
          src="https://plausible.io/js/script.outbound-links.js"
          data-domain="docs-xmtp-org-git-xmtp-legacy-ephemerahq.vercel.app"
          defer
        />
      </>
    );
  },
  title: "Legacy XMTP documentation",
  description:
    "This site provides documentation for legacy versions of XMTP. To learn how to build 1:1 and group chat experiences with the latest version of XMTP, see https://docs.xmtp.org/.", 
  logoUrl: {
    light: "/xmtp-logo-lockup-grey-black.png",
    dark: "/xmtp-logo-lockup-grey-white.png",
  },
  iconUrl: "/xmtp-logo-grey.png",
  topNav: [
    {
      text: "🔔 Read the latest docs",
      link: "https://docs.xmtp.org/",
    },
  ],
  ogImageUrl: {
    "/": "/xmtp-og-card.jpeg",
    "/docs":
      "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  },
  sidebar: [
    {
      text: "🔔 Read the latest docs ↗",
      link: "https://docs.xmtp.org/",
      items: [], // Add this line
    },
    {
      text: "⎯ LEGACY DOCUMENTATION ⎯",
      items: [], // Add this line
    },
    {
      text: "Overview",
      collapsed: true,
      items: [
        {
          text: "Intro to XMTP",
          link: "/get-started/intro",
        },
        {
          text: "FAQ",
          link: "/get-started/faq",
        },
      ],
    },
    {
      text: "Embed a chat widget",
      link: "/chat-widget/chat-widget",
      items: [], // Add this line
    },
    {
      text: "Broadcast notifications",
      collapsed: true,
      items: [
        {
          text: "Use case",
          link: "/consent/build-engagement",
        },
        {
          text: "Enable subscriptions",
          link: "/consent/subscribe",
        },
        {
          text: "Broadcast notifications",
          link: "/consent/broadcast",
        },
        {
          text: "Quickstart repos",
          link: "/consent/consent-quickstarts",
        },
      ],
    },
    {
      text: "Build chat inboxes",
      collapsed: true,
      items: [
        {
          text: "Get started",
          collapsed: false,
          items: [
            {
              text: "Developer quickstart",
              link: "/get-started/developer-quickstart",
            },
            {
              text: "SDKs and example apps",
              link: "/get-started/examples",
            },
            {
              text: "SDK references",
              link: "/get-started/references",
            },
          ],
        },
        {
          text: "Create a client",
          link: "/client/create-client",
        },
        {
          text: "Build 1:1 chat",
          collapsed: true,
          items: [
            {
              text: "Create a 1:1 conversation",
              link: "/dms/conversations",
            },
            {
              text: "Send 1:1 messages",
              link: "/dms/messages",
            },
            {
              text: "Stream 1:1 conversations & messages",
              link: "/dms/streams",
            },
          ],
        },
        {
          text: "Build group chat",
          collapsed: true,
          items: [
            {
              text: "Build group chat",
              link: "/groups/build-group-chat",
            },
            {
              text: "Handle group consent",
              link: "/groups/group-consent",
            },
            {
              text: "Handle group permissions",
              link: "/groups/group-permissions",
            },
            {
              text: "Handle group metadata",
              link: "/groups/group-metadata",
            },
          ],
        },
        {
          text: "Build push notifications",
          collapsed: true,
          items: [
            {
              text: "Send push notifications",
              link: "/notifications/build-notifications",
            },
            {
              text: "Set up a push notification server",
              link: "/notifications/notif-server",
            },
            {
              text: "Best practices",
              link: "/notifications/notif-best-practices",
            },
            {
              text: "Try Android example notifications",
              link: "/notifications/notifs-android",
            },
            {
              text: "Try iOS example notifications",
              link: "/notifications/notifs-ios",
            },
          ],
        },
        {
          text: "Support spam-free inboxes",
          collapsed: true,
          items: [
            {
              text: "User consent and spam-free inboxes",
              link: "/consent/user-consent",
            },
            {
              text: "Build with consent methods",
              link: "/consent/consent-methods",
            },
            {
              text: "Handle unknown contacts",
              link: "/consent/filter-spam",
            },
          ],
        },
        {
          text: "Support content types",
          collapsed: true,
          items: [
            {
              text: "Understand content types",
              link: "/content-types/content-types",
            },
            {
              text: "Remote attachment",
              link: "/content-types/remote-attachment",
            },
            {
              text: "Replies",
              link: "/content-types/reply",
            },
            {
              text: "Reactions",
              link: "/content-types/reaction",
            },
            {
              text: "Read receipts",
              link: "/content-types/read-receipt",
            },
            {
              text: "Onchain transaction references",
              link: "/content-types/transaction-ref",
            },
            {
              text: "Custom content type",
              link: "/content-types/custom",
            },
          ],
        },
        {
          text: "Display Open Frames",
          collapsed: true,
          items: [
            {
              text: "Get started with Open Frames",
              link: "/open-frames/open-frames",
            },
            {
              text: "Display transactional Open Frames",
              link: "/open-frames/transactional-open-frames",
            },
            {
              text: "Display subscription Open Frames",
              link: "/open-frames/subscription-open-frames",
            },
          ],
        },
        {
          text: "Performance & UX",
          collapsed: true,
          items: [
            {
              text: "Use local-first architecture",
              link: "/perf-ux/local-first",
            },
            {
              text: "Use optimistic sending",
              link: "/perf-ux/optimistic-sending",
            },
            {
              text: "Resolve identities",
              link: "/perf-ux/identity-resolution",
            },
            {
              text: "Performance test",
              link: "/perf-ux/debug-and-test",
            },
            {
              text: "Launch checklist",
              link: "/perf-ux/get-featured",
            },
            {
              text: "MetaMask Snap",
              link: "/perf-ux/xmtp-metamask-snap",
            },
          ],
        },
        {
          text: "Troubleshoot",
          link: "/dms/troubleshoot",
        },
      ],
    },
    {
      text: "Learn protocol concepts",
      collapsed: true,
      items: [
        {
          text: "Account signatures",
          link: "/protocol/signatures",
        },
        {
          text: "Security and encryption",
          link: "/protocol/security-encryption",
        },
        {
          text: "Protocols",
          link: "/protocol/protocols",
        },
        {
          text: "Multi-wallet identity",
          link: "/protocol/v3/identity",
        },
        {
          text: "Message history",
          link: "/protocol/v3/message-history",
        },
        {
          text: "Smart wallet support",
          link: "/protocol/v3/smart-wallet",
        },
        {
          text: "Portable inbox",
          link: "/protocol/portable-inbox",
        },
        {
          text: "XIPs",
          link: "/protocol/xips",
        },
        {
          text: "XMTP versions",
          link: "/protocol/xmtp-versions",
        },
        {
          text: "XMTP V2",
          collapsed: true,
          items: [
            {
              text: "Architecture",
              link: "/protocol/v2/architectural-overview",
            },
            {
              text: "Key generation",
              link: "/protocol/v2/key-generation-and-usage",
            },
            {
              text: "Encryption",
              link: "/protocol/v2/invitation-and-message-encryption",
            },
            {
              text: "Algorithms in use",
              link: "/protocol/v2/algorithms-in-use",
            },
          ],
        },
      ],
    },
  ],
});
