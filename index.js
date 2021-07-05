"use strict";
const k8s = require("@pulumi/kubernetes");

const appLabels = { app: "wordpress" };
const deployment = new k8s.apps.v1.Deployment("wordpress", {
    spec: {
        selector: { matchLabels: appLabels },
        replicas: 1,
        template: {
            metadata: { labels: appLabels },
            spec: { containers: [{ name: "wordpress", image: "wordpress" }] }
        }
    }
});
exports.name = deployment.metadata.name;
