"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5294],{5650:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"v3.7.x","label":"v3.7.x","banner":null,"badge":true,"className":"docs-version-v3.7.x","isLast":true,"docsSidebars":{"version-v3.7.x/docs":[{"type":"category","label":"Getting Started","collapsed":false,"items":[{"type":"link","label":"Introduction","href":"/gatekeeper/website/docs/","docId":"intro"},{"type":"link","label":"Installation","href":"/gatekeeper/website/docs/install","docId":"install"},{"type":"link","label":"Examples","href":"/gatekeeper/website/docs/examples","docId":"examples"}],"collapsible":true},{"type":"category","label":"How to use Gatekeeper","collapsed":false,"items":[{"type":"link","label":"How to use Gatekeeper","href":"/gatekeeper/website/docs/howto","docId":"howto"},{"type":"link","label":"Audit","href":"/gatekeeper/website/docs/audit","docId":"audit"},{"type":"link","label":"Handling Constraint Violations","href":"/gatekeeper/website/docs/violations","docId":"violations"},{"type":"link","label":"Replicating Data","href":"/gatekeeper/website/docs/sync","docId":"sync"},{"type":"link","label":"Exempting Namespaces","href":"/gatekeeper/website/docs/exempt-namespaces","docId":"exempt-namespaces"},{"type":"link","label":"Policy Library","href":"/gatekeeper/website/docs/library","docId":"library"},{"type":"link","label":"Customizing Startup Behavior","href":"/gatekeeper/website/docs/customize-startup","docId":"customize-startup"},{"type":"link","label":"Customizing Admission Behavior","href":"/gatekeeper/website/docs/customize-admission","docId":"customize-admission"},{"type":"link","label":"Metrics","href":"/gatekeeper/website/docs/metrics","docId":"metrics"},{"type":"link","label":"Debugging","href":"/gatekeeper/website/docs/debug","docId":"debug"},{"type":"link","label":"Emergency Recovery","href":"/gatekeeper/website/docs/emergency","docId":"emergency"},{"type":"link","label":"Cloud and Vendor Specific Fixes","href":"/gatekeeper/website/docs/vendor-specific","docId":"vendor-specific"},{"type":"link","label":"Failing Closed","href":"/gatekeeper/website/docs/failing-closed","docId":"failing-closed"},{"type":"link","label":"Mutation","href":"/gatekeeper/website/docs/mutation","docId":"mutation"},{"type":"link","label":"Constraint Templates","href":"/gatekeeper/website/docs/constrainttemplates","docId":"constrainttemplates"},{"type":"link","label":"External Data","href":"/gatekeeper/website/docs/externaldata","docId":"externaldata"},{"type":"link","label":"The gator CLI","href":"/gatekeeper/website/docs/gator","docId":"gator"},{"type":"link","label":"Working with Workload Resources","href":"/gatekeeper/website/docs/workload-resources","docId":"workload-resources"}],"collapsible":true},{"type":"category","label":"Architecture","collapsed":false,"items":[{"type":"link","label":"Operations","href":"/gatekeeper/website/docs/operations","docId":"operations"}],"collapsible":true},{"type":"category","label":"Contributing","collapsed":false,"items":[{"type":"link","label":"Developers","href":"/gatekeeper/website/docs/developers","docId":"developers"},{"type":"link","label":"Want to help?","href":"/gatekeeper/website/docs/help","docId":"help"},{"type":"link","label":"Security","href":"/gatekeeper/website/docs/security","docId":"security"}],"collapsible":true}]},"docs":{"audit":{"id":"audit","title":"Audit","description":"Audit performs periodic evaluations of existing resources against constraints, detecting pre-existing misconfigurations.","sidebar":"version-v3.7.x/docs"},"constrainttemplates":{"id":"constrainttemplates","title":"Constraint Templates","description":"ConstraintTemplates define a way to validate some set of Kubernetes objects in Gatekeeper\'s Kubernetes admission controller.  They are made of two main elements:","sidebar":"version-v3.7.x/docs"},"customize-admission":{"id":"customize-admission","title":"Customizing Admission Behavior","description":"Gatekeeper is a Kubernetes admission webhook","sidebar":"version-v3.7.x/docs"},"customize-startup":{"id":"customize-startup","title":"Customizing Startup Behavior","description":"Allow retries when adding objects to OPA","sidebar":"version-v3.7.x/docs"},"debug":{"id":"debug","title":"Debugging","description":"NOTE: Verbose logging with DEBUG level can be turned on with --log-level=DEBUG.  By default, the --log-level flag is set to minimum log level INFO. Acceptable values for minimum log level are [DEBUG, INFO, WARNING, ERROR]. In production, this flag should not be set to DEBUG.","sidebar":"version-v3.7.x/docs"},"developers":{"id":"developers","title":"Developers","description":"This section describes how Gatekeeper developers can leverage kind and Tilt for rapid iterative development. Kind allows developers to quickly provision a conformant Kubernetes cluster using Docker and Tilt enables smart rebuilds and live updates of your Kubernetes workload during development time.","sidebar":"version-v3.7.x/docs"},"emergency":{"id":"emergency","title":"Emergency Recovery","description":"If a situation arises where Gatekeeper is preventing the cluster from operating correctly,","sidebar":"version-v3.7.x/docs"},"examples":{"id":"examples","title":"Examples","description":"The demo/basic directory contains the above examples of simple constraints, templates and configs to play with.","sidebar":"version-v3.7.x/docs"},"exempt-namespaces":{"id":"exempt-namespaces","title":"Exempting Namespaces","description":"Exempting Namespaces from Gatekeeper using config resource","sidebar":"version-v3.7.x/docs"},"externaldata":{"id":"externaldata","title":"External Data","description":"\u2757 This feature is still in alpha stage, so the final form can still change (feedback is welcome!).","sidebar":"version-v3.7.x/docs"},"failing-closed":{"id":"failing-closed","title":"Failing Closed","description":"Here we discuss how to configure Gatekeeper to fail closed and some factors you may want to consider before doing so.","sidebar":"version-v3.7.x/docs"},"gator":{"id":"gator","title":"The gator CLI","description":"The gator CLI is a tool for evaluating Gatekeeper ConstraintTemplates and","sidebar":"version-v3.7.x/docs"},"help":{"id":"help","title":"Want to help?","description":"Join us to help define the direction and implementation of this project!","sidebar":"version-v3.7.x/docs"},"howto":{"id":"howto","title":"How to use Gatekeeper","description":"Gatekeeper uses the OPA Constraint Framework to describe and enforce policy. Look there for more detailed information on their semantics and advanced usage.","sidebar":"version-v3.7.x/docs"},"install":{"id":"install","title":"Installation","description":"Prerequisites","sidebar":"version-v3.7.x/docs"},"intro":{"id":"intro","title":"Introduction","description":"Goals","sidebar":"version-v3.7.x/docs"},"library":{"id":"library","title":"Policy Library","description":"See the Gatekeeper policy library for a collection of constraint templates and sample constraints that you can use with Gatekeeper.","sidebar":"version-v3.7.x/docs"},"metrics":{"id":"metrics","title":"Metrics","description":"Below are the list of metrics provided by Gatekeeper:","sidebar":"version-v3.7.x/docs"},"mutation":{"id":"mutation","title":"Mutation","description":"The mutation feature allows Gatekeeper modify Kubernetes resources at request time based on customizable mutation policies.","sidebar":"version-v3.7.x/docs"},"operations":{"id":"operations","title":"Operations","description":"Gatekeeper is flexible in how it can be deployed. If desired, core pieces of functionality can be broken","sidebar":"version-v3.7.x/docs"},"security":{"id":"security","title":"Security","description":"Please report vulnerabilities by email to open-policy-agent-security.","sidebar":"version-v3.7.x/docs"},"sync":{"id":"sync","title":"Replicating Data","description":"The \\"Config\\" resource has to be named \\"config\\" for it to be reconciled by Gatekeeper. Gatekeeper will ignore the resource if you do not name it \\"config\\".","sidebar":"version-v3.7.x/docs"},"vendor-specific":{"id":"vendor-specific","title":"Cloud and Vendor Specific Fixes","description":"Running on private GKE Cluster nodes","sidebar":"version-v3.7.x/docs"},"violations":{"id":"violations","title":"Handling Constraint Violations","description":"Log denies","sidebar":"version-v3.7.x/docs"},"workload-resources":{"id":"workload-resources","title":"Working with Workload Resources","description":"Workload Validation","sidebar":"version-v3.7.x/docs"}}}')}}]);