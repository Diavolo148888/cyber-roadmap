/* Security Engineer specialisation paths.
   A path unlocks only after the shared core (zones 0-3) is cleared.
   Tasks carry r[] (resource URLs) + rnames[] (matching labels).
   res[] entries are [label, url, icon]; all URLs HTTP-verified 2026-10-04.
   Weighting informed by 55 live job postings, 29 Security Engineer vs 26 SOC. */
window.PATHS=[
 {
  "id": "appsec",
  "name": "Application Security",
  "icon": "globe",
  "hrs": 180,
  "role": "Application Security Engineer",
  "blurb": "Security Engineer tracks that break software, not networks. This is the most common Security Engineer job title after SOC, and it is reachable from a pure SOC background because it is all code review and testing.",
  "skills": [
   "Secure code review",
   "OWASP Top 10 in depth",
   "Static analysis (SAST)",
   "API security",
   "Dependency and supply chain risk"
  ],
  "stages": [
   {
    "id": "P1.1",
    "name": "Threat Modeling",
    "h": 40,
    "blurb": "Security Engineers design defences, not just detect them. Threat modeling is how you find the flaw before anyone builds it.",
    "tasks": [
     {
      "t": "What threat modeling is for",
      "d": 1,
      "w": "Understand that it is a design conversation, not a document you write after the code exists.",
      "q": [
       {
        "q": "When should threat modeling happen?",
        "a": "At design time, before implementation. After the code is written it is a review, not a model."
       }
      ],
      "r": [
       "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html",
       "https://cheatsheetseries.owasp.org/",
       "https://owasp.org/www-project-top-ten/",
       "https://csrc.nist.gov/pubs/sp/800/30/r1/final",
       "https://learn.microsoft.com/en-us/training/paths/tm-threat-modeling-fundamentals/",
       "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats"
      ],
      "p": 10,
      "rnames": [
       "OWASP Threat Modeling Cheat Sheet",
       "OWASP Cheat Sheet Series",
       "OWASP Top 10",
       "NIST SP 800-30 Risk Assessment",
       "MS Threat Modeling 3h",
       "Azure STRIDE reference"
      ]
     },
     {
      "t": "STRIDE and the other models",
      "d": 2,
      "w": "Learn STRIDE by heart. It is the model most security engineers reach for first.",
      "q": [
       {
        "q": "What does STRIDE stand for?",
        "a": "Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege."
       },
       {
        "q": "What is the DREAD model used for?",
        "a": "Rating severity by Damage, Reproducibility, Exploitability, Affected users and Discoverability."
       }
      ],
      "r": [
       "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html",
       "https://cheatsheetseries.owasp.org/",
       "https://owasp.org/www-project-top-ten/",
       "https://csrc.nist.gov/pubs/sp/800/30/r1/final",
       "https://learn.microsoft.com/en-us/training/paths/tm-threat-modeling-fundamentals/",
       "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats"
      ],
      "p": 20,
      "rnames": [
       "OWASP Cheat Sheet Series",
       "OWASP Threat Modeling Cheat Sheet",
       "OWASP Top 10",
       "NIST SP 800-30 Risk Assessment",
       "MS Threat Modeling 3h",
       "Azure STRIDE reference"
      ]
     },
     {
      "t": "Draw a data flow diagram",
      "d": 3,
      "w": "Map trust boundaries and data flows for something small you can reason about end to end.",
      "q": [
       {
        "q": "What is a trust boundary?",
        "a": "Any point where data crosses between privilege levels, for example from user input into a database query."
       }
      ],
      "r": [
       "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html",
       "https://owasp.org/www-project-top-ten/",
       "https://cheatsheetseries.owasp.org/",
       "https://csrc.nist.gov/pubs/sp/800/30/r1/final",
       "https://learn.microsoft.com/en-us/training/paths/tm-threat-modeling-fundamentals/",
       "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats"
      ],
      "p": 30,
      "rnames": [
       "OWASP Threat Modeling Cheat Sheet",
       "OWASP Threat Modeling Cheat Sheet",
       "OWASP Cheat Sheet Series",
       "NIST SP 800-30 Risk Assessment",
       "MS Threat Modeling 3h",
       "Azure STRIDE reference"
      ]
     },
     {
      "t": "Run a tabletop exercise",
      "d": 4,
      "w": "Take a small application, enumerate its threats, and rank them by likelihood and impact.",
      "q": [
       {
        "q": "What makes a threat actionable?",
        "a": "A specific actor, a specific asset, a specific path to it, and a matching mitigation."
       }
      ],
      "r": [
       "https://csrc.nist.gov/pubs/sp/800/30/r1/final",
       "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html",
       "https://cheatsheetseries.owasp.org/",
       "https://owasp.org/www-project-top-ten/",
       "https://learn.microsoft.com/en-us/training/paths/tm-threat-modeling-fundamentals/",
       "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats"
      ],
      "p": 40,
      "rnames": [
       "NIST SP 800-30 Risk Assessment",
       "OWASP Threat Modeling Cheat Sheet",
       "OWASP Cheat Sheet Series",
       "OWASP Top 10",
       "MS Threat Modeling 3h",
       "Azure STRIDE reference"
      ]
     }
    ],
    "res": [
     [
      "OWASP Threat Modeling Cheat Sheet",
      "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html",
      "book"
     ],
     [
      "OWASP Cheat Sheet Series",
      "https://cheatsheetseries.owasp.org/",
      "book"
     ],
     [
      "OWASP Top 10",
      "https://owasp.org/www-project-top-ten/",
      "shield"
     ],
     [
      "NIST SP 800-30 Risk Assessment",
      "https://csrc.nist.gov/pubs/sp/800/30/r1/final",
      "book"
     ],
     [
      "MS Threat Modeling 3h",
      "https://learn.microsoft.com/en-us/training/paths/tm-threat-modeling-fundamentals/",
      "shield"
     ],
     [
      "Azure STRIDE reference",
      "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats",
      "book"
     ]
    ]
   },
   {
    "id": "P1.2",
    "name": "Secure Code Review",
    "h": 45,
    "blurb": "Reading other peoples code for flaws is the core day job of an application security engineer. Learn to do it fast and defensibly.",
    "tasks": [
     {
      "t": "Read code for security, not style",
      "d": 2,
      "w": "Train your eye on the handful of patterns that account for most real vulnerabilities.",
      "q": [
       {
        "q": "What should you look for first in a diff?",
        "a": "Trust boundaries. Where does untrusted input reach a sink such as a query, a shell, a deserializer or a template."
       }
      ],
      "r": [
       "https://semgrep.dev/",
       "https://owasp.org/www-project-top-ten/"
      ],
      "p": 20,
      "rnames": [
       "OWASP Top 10",
       "Semgrep"
      ]
     },
     {
      "t": "Run a static analyser",
      "d": 3,
      "w": "Use Semgrep and CodeQL on code you own and read the output critically.",
      "q": [
       {
        "q": "Why not just trust the scanner?",
        "a": "Static analysis has both false positives and false negatives. You have to triage results, not forward them."
       }
      ],
      "r": [
       "https://semgrep.dev/",
       "https://codeql.github.com/"
      ],
      "p": 30,
      "rnames": [
       "Semgrep",
       "GitHub CodeQL"
      ]
     },
     {
      "t": "Find and fix a real CVE",
      "d": 4,
      "w": "Pick an open source advisory, read the patch, and explain what it fixed.",
      "q": [
       {
        "q": "What is a CVE?",
        "a": "A publicly disclosed identifier for a specific vulnerability in a specific product version."
       }
      ],
      "r": [
       "https://cve.mitre.org/",
       "https://www.first.org/cvss/"
      ],
      "p": 40,
      "rnames": [
       "CVE Program",
       "FIRST CVSS"
      ]
     },
     {
      "t": "Write a review that lands",
      "d": 3,
      "w": "Give feedback a developer will act on: what, why, severity, and a concrete fix.",
      "q": [
       {
        "q": "What makes security review feedback useful?",
        "a": "It names the exact line, explains the realistic impact, and suggests the fix. A scanner dump does neither."
       }
      ],
      "r": [
       "https://semgrep.dev/",
       "https://owasp.org/www-project-top-ten/"
      ],
      "p": 40,
      "rnames": [
       "Semgrep",
       "OWASP Top 10"
      ]
     }
    ],
    "res": [
     [
      "Semgrep",
      "https://semgrep.dev/",
      "shield"
     ],
     [
      "GitHub CodeQL",
      "https://codeql.github.com/",
      "code"
     ],
     [
      "OWASP Top 10",
      "https://owasp.org/www-project-top-ten/",
      "shield"
     ],
     [
      "CVE Program",
      "https://cve.mitre.org/",
      "search"
     ],
     [
      "FIRST CVSS",
      "https://www.first.org/cvss/",
      "chart"
     ]
    ]
   },
   {
    "id": "P1.3",
    "name": "API and Supply Chain Security",
    "h": 45,
    "blurb": "APIs are where modern apps actually break, and almost every breach now arrives through a dependency you did not write.",
    "tasks": [
     {
      "t": "API security specifics",
      "d": 3,
      "w": "AuthN, AuthZ, rate limiting, mass assignment and object level authorisation on real API shapes.",
      "q": [
       {
        "q": "What is the most common API flaw?",
        "a": "Broken object level authorisation, where changing an ID in the request returns another users data."
       }
      ],
      "r": [
       "https://owasp.org/www-project-top-ten/"
      ],
      "p": 30,
      "rnames": [
       "OWASP Top 10"
      ]
     },
     {
      "t": "Dependency risk",
      "d": 3,
      "w": "Understand transitive dependencies and why adding one package can add a hundred.",
      "q": [
       {
        "q": "What is a transitive dependency?",
        "a": "A package your package depends on, and its dependencies, recursively. You own all of them."
       }
      ],
      "r": [
       "https://github.com/gitleaks/gitleaks"
      ],
      "p": 30,
      "rnames": [
       "Gitleaks"
      ]
     },
     {
      "t": "Secret scanning",
      "d": 2,
      "w": "Scan your own repositories for leaked credentials and rotate anything real.",
      "q": [
       {
        "q": "What is the first thing to do when you find a committed secret?",
        "a": "Rotate it. Deleting the commit does not un-leak it, because clones and forks already have it."
       }
      ],
      "r": [
       "https://github.com/gitleaks/gitleaks"
      ],
      "p": 20,
      "rnames": [
       "Gitleaks"
      ]
     },
     {
      "t": "Supply chain integrity",
      "d": 4,
      "w": "Learn provenance, signing and SLSA, and why they matter more after one major incident.",
      "q": [
       {
        "q": "What problem does SLSA address?",
        "a": "Provenance for build artifacts, so you can prove where and how something was built."
       }
      ],
      "r": [
       "https://scorecard.dev/",
       "https://slsa.dev/",
       "https://in-toto.io/"
      ],
      "p": 50,
      "rnames": [
       "OpenSSF Scorecard",
       "SLSA",
       "in-toto"
      ]
     }
    ],
    "res": [
     [
      "OWASP Top 10",
      "https://owasp.org/www-project-top-ten/",
      "shield"
     ],
     [
      "Gitleaks",
      "https://github.com/gitleaks/gitleaks",
      "search"
     ],
     [
      "OpenSSF Scorecard",
      "https://scorecard.dev/",
      "shield"
     ],
     [
      "SLSA",
      "https://slsa.dev/",
      "book"
     ],
     [
      "in-toto",
      "https://in-toto.io/",
      "book"
     ]
    ]
   },
   {
    "id": "P1.4",
    "name": "Container and Platform Security",
    "h": 50,
    "blurb": "Shift left means securing the platform, not just the app. This is where security engineers get hired in 2026.",
    "tasks": [
     {
      "t": "Container fundamentals",
      "d": 2,
      "w": "Images, layers, registries and why a container is not a security boundary by itself.",
      "q": [
       {
        "q": "What is the main risk with container images?",
        "a": "Trusting a base image or layer you did not build. That is why provenance matters here too."
       }
      ],
      "r": [
       "https://trivy.dev/",
       "https://github.com/bridgecrewio/checkov",
       "https://cheatsheetseries.owasp.org/",
       "https://slsa.dev/",
       "https://scorecard.dev/",
       "https://kubernetes.io/docs/concepts/security/",
       "https://openpolicyagent.org/",
       "https://github.com/aquasecurity/kube-bench",
       "https://killercoda.com/",
       "https://falco.org/"
      ],
      "p": 20,
      "rnames": [
       "Trivy",
       "Checkov",
       "OWASP Cheat Sheets",
       "SLSA",
       "OpenSSF Scorecard",
       "Kubernetes Security",
       "OPA Gatekeeper",
       "kube-bench",
       "Free K8s sandbox",
       "Falco"
      ]
     },
     {
      "t": "Scan images and IaC",
      "d": 3,
      "w": "Run Trivy against images and Checkov against Terraform, and triage what you find.",
      "q": [
       {
        "q": "What does a scanner give you that judgement does not?",
        "a": "Coverage. It checks the things you never thought to look at, which is exactly where the boring misses live."
       }
      ],
      "r": [
       "https://trivy.dev/",
       "https://github.com/bridgecrewio/checkov",
       "https://cheatsheetseries.owasp.org/",
       "https://slsa.dev/",
       "https://scorecard.dev/",
       "https://kubernetes.io/docs/concepts/security/",
       "https://openpolicyagent.org/",
       "https://github.com/aquasecurity/kube-bench",
       "https://killercoda.com/",
       "https://falco.org/"
      ],
      "p": 30,
      "rnames": [
       "Trivy",
       "Checkov",
       "OWASP Cheat Sheets",
       "SLSA",
       "OpenSSF Scorecard",
       "Kubernetes Security",
       "OPA Gatekeeper",
       "kube-bench",
       "Free K8s sandbox",
       "Falco"
      ]
     },
     {
      "t": "Kubernetes security basics",
      "d": 4,
      "w": "RBAC, network policies, pod security standards and what a privileged pod means.",
      "q": [
       {
        "q": "What is the Kubernetes RBAC trap?",
        "a": "Wildcard permissions. A binding granting cluster-admin to a service account in one namespace hands over the whole cluster."
       }
      ],
      "r": [
       "https://github.com/bridgecrewio/checkov",
       "https://cheatsheetseries.owasp.org/",
       "https://trivy.dev/",
       "https://slsa.dev/",
       "https://scorecard.dev/",
       "https://kubernetes.io/docs/concepts/security/",
       "https://openpolicyagent.org/",
       "https://github.com/aquasecurity/kube-bench",
       "https://killercoda.com/",
       "https://falco.org/"
      ],
      "p": 40,
      "rnames": [
       "Checkov",
       "OWASP Cheat Sheets",
       "Trivy",
       "SLSA",
       "OpenSSF Scorecard",
       "Kubernetes Security",
       "OPA Gatekeeper",
       "kube-bench",
       "Free K8s sandbox",
       "Falco"
      ]
     },
     {
      "t": "Admission control",
      "d": 4,
      "w": "Understand how policy is enforced before a workload runs, not after.",
      "q": [
       {
        "q": "Why does admission control matter?",
        "a": "It is the last point where you can refuse a dangerous workload, before it ever executes."
       }
      ],
      "r": [
       "https://slsa.dev/",
       "https://scorecard.dev/",
       "https://trivy.dev/",
       "https://github.com/bridgecrewio/checkov",
       "https://cheatsheetseries.owasp.org/",
       "https://kubernetes.io/docs/concepts/security/",
       "https://openpolicyagent.org/",
       "https://github.com/aquasecurity/kube-bench",
       "https://killercoda.com/",
       "https://falco.org/"
      ],
      "p": 40,
      "rnames": [
       "SLSA",
       "OpenSSF Scorecard",
       "Trivy",
       "Checkov",
       "OWASP Cheat Sheets",
       "Kubernetes Security",
       "OPA Gatekeeper",
       "kube-bench",
       "Free K8s sandbox",
       "Falco"
      ]
     }
    ],
    "res": [
     [
      "Trivy",
      "https://trivy.dev/",
      "shield"
     ],
     [
      "Checkov",
      "https://github.com/bridgecrewio/checkov",
      "cog"
     ],
     [
      "OWASP Cheat Sheets",
      "https://cheatsheetseries.owasp.org/",
      "book"
     ],
     [
      "SLSA",
      "https://slsa.dev/",
      "book"
     ],
     [
      "OpenSSF Scorecard",
      "https://scorecard.dev/",
      "shield"
     ],
     [
      "Kubernetes Security",
      "https://kubernetes.io/docs/concepts/security/",
      "cog"
     ],
     [
      "OPA Gatekeeper",
      "https://openpolicyagent.org/",
      "cog"
     ],
     [
      "kube-bench",
      "https://github.com/aquasecurity/kube-bench",
      "book"
     ],
     [
      "Free K8s sandbox",
      "https://killercoda.com/",
      "server"
     ],
     [
      "Falco",
      "https://falco.org/",
      "radar"
     ]
    ]
   }
  ]
 },
 {
  "id": "cloud",
  "name": "Cloud Security",
  "icon": "cloud",
  "hrs": 170,
  "role": "Cloud Security Engineer",
  "blurb": "The 2026 DBIR points at ungoverned machine identity and cloud misconfiguration as the dominant breach path. This path is the highest demand specialisation on the board.",
  "skills": [
   "IAM and least privilege design",
   "Cloud architecture review",
   "Secrets and key management",
   "Infrastructure as code security",
   "Cloud detection engineering"
  ],
  "stages": [
   {
    "id": "P2.1",
    "name": "IAM and Identity",
    "h": 45,
    "blurb": "Access control is the control that fails most often. Everything else in cloud security hangs off it.",
    "tasks": [
     {
      "t": "IAM mental model",
      "d": 2,
      "w": "Principals, policies, roles, conditions and how evaluation actually works.",
      "q": [
       {
        "q": "What is the principle of least privilege in one sentence?",
        "a": "Grant the narrowest permission that lets the job be done, for the shortest time it is needed."
       }
      ],
      "r": [
       "https://docs.aws.amazon.com/IAM/latest/UserGuide/",
       "https://learn.microsoft.com/en-us/entra/"
      ],
      "p": 20,
      "rnames": [
       "AWS IAM Docs",
       "Microsoft Entra ID"
      ]
     },
     {
      "t": "Enumerate over-privilege",
      "d": 3,
      "w": "Find every principal with more access than it uses, in an account you own.",
      "q": [
       {
        "q": "What is the most common IAM finding in a real audit?",
        "a": "Wildcard actions combined with wildcard resources, usually granted once for convenience and never revisited."
       }
      ],
      "r": [
       "https://docs.aws.amazon.com/IAM/latest/UserGuide/",
       "https://skillbuilder.aws/"
      ],
      "p": 30,
      "rnames": [
       "AWS IAM Docs",
       "AWS Skill Builder"
      ]
     },
     {
      "t": "Machine identity",
      "d": 4,
      "w": "Non-human identities outnumber humans and are the 2026 breach story. Know how they are created and stored.",
      "q": [
       {
        "q": "Why are machine identities riskier than human ones?",
        "a": "They never expire, are rarely reviewed, and often carry broad programmatic access with no owner to notice misuse."
       }
      ],
      "r": [
       "https://learn.microsoft.com/en-us/entra/"
      ],
      "p": 40,
      "rnames": [
       "Microsoft Entra ID"
      ]
     },
     {
      "t": "Secrets and keys",
      "d": 3,
      "w": "Never hardcode credentials. Use a secret manager and rotate on a schedule.",
      "q": [
       {
        "q": "What is the correct place for an API key?",
        "a": "A secret manager or a runtime environment variable, never source control or a container image layer."
       }
      ],
      "r": [
       "https://docs.aws.amazon.com/IAM/latest/UserGuide/",
       "https://learn.microsoft.com/en-us/entra/"
      ],
      "p": 40,
      "rnames": [
       "AWS IAM Docs",
       "Microsoft Entra ID"
      ]
     }
    ],
    "res": [
     [
      "AWS IAM Docs",
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/",
      "users"
     ],
     [
      "Microsoft Entra ID",
      "https://learn.microsoft.com/en-us/entra/",
      "shield"
     ],
     [
      "AWS Skill Builder",
      "https://skillbuilder.aws/",
      "cloud"
     ],
     [
      "Google Skills",
      "https://www.skills.google/",
      "cloud"
     ]
    ]
   },
   {
    "id": "P2.2",
    "name": "Cloud Architecture Review",
    "h": 40,
    "blurb": "A security engineer reviews designs before they are built. This is the highest leverage thing you can do on a team.",
    "tasks": [
     {
      "t": "Shared responsibility",
      "d": 1,
      "w": "Know exactly what the provider secures and where your responsibility resumes.",
      "q": [
       {
        "q": "Who patches the hypervisor?",
        "a": "You."
       }
      ],
      "r": [
       "https://learn.microsoft.com/en-us/credentials/",
       "https://docs.aws.amazon.com/"
      ],
      "p": 20,
      "rnames": [
       "Microsoft Learn Security",
       "AWS Docs"
      ]
     },
     {
      "t": "Review a design",
      "d": 3,
      "w": "Take a described architecture and find the security problems before they cost anything.",
      "q": [
       {
        "q": "What is the most common design flaw?",
        "a": "A flat network where every component can reach every other component with no segmentation."
       }
      ],
      "r": [
       "https://docs.aws.amazon.com/",
       "https://cheatsheetseries.owasp.org/"
      ],
      "p": 30,
      "rnames": [
       "AWS Docs",
       "OWASP Cheat Sheets"
      ]
     },
     {
      "t": "Network segmentation",
      "d": 3,
      "w": "Apply defence in depth: security groups, private subnets, and egress control.",
      "q": [
       {
        "q": "Why does egress control matter?",
        "a": "Data exfiltration does not require inbound access. Blocking outbound paths limits the damage of a compromise."
       }
      ],
      "r": [
       "https://learn.microsoft.com/en-us/credentials/",
       "https://docs.aws.amazon.com/"
      ],
      "p": 30,
      "rnames": [
       "Microsoft Learn Security",
       "AWS Docs"
      ]
     },
     {
      "t": "Logging and audit",
      "d": 3,
      "w": "Turn on the audit logs you would actually need for detection, and prove they are retained.",
      "q": [
       {
        "q": "Why is retention as important as collection?",
        "a": "An incident discovered late needs history. Short retention deletes the evidence you need."
       }
      ],
      "r": [
       "https://learn.microsoft.com/en-us/credentials/",
       "https://cheatsheetseries.owasp.org/"
      ],
      "p": 40,
      "rnames": [
       "Microsoft Learn Security",
       "OWASP Cheat Sheets"
      ]
     }
    ],
    "res": [
     [
      "Microsoft Learn Security",
      "https://learn.microsoft.com/en-us/credentials/",
      "shield"
     ],
     [
      "AWS Docs",
      "https://docs.aws.amazon.com/",
      "book"
     ],
     [
      "OWASP Cheat Sheets",
      "https://cheatsheetseries.owasp.org/",
      "book"
     ],
     [
      "Terraform Tutorials",
      "https://developer.hashicorp.com/terraform/tutorials",
      "cog"
     ]
    ]
   },
   {
    "id": "P2.3",
    "name": "Cloud Detection Engineering",
    "h": 45,
    "blurb": "This is where a SOC background pays off most directly. You already know the logs; now you own the detection.",
    "tasks": [
     {
      "t": "Cloud audit logs",
      "d": 3,
      "w": "Learn the control-plane events that matter: who changed what, and from where.",
      "q": [
       {
        "q": "Which log answers who deleted a bucket?",
        "a": "The control plane audit log: CloudTrail, Azure Activity Log, or Google Admin Activity."
       }
      ],
      "r": [
       "https://attack.mitre.org/",
       "https://docs.aws.amazon.com/",
       "https://cyberdefenders.org/",
       "https://trivy.dev/",
       "https://github.com/bridgecrewio/checkov",
       "https://caldera.mitre.org/",
       "https://github.com/projectdiscovery/nuclei"
      ],
      "p": 30,
      "rnames": [
       "MITRE ATT and CK",
       "AWS Docs",
       "CyberDefenders",
       "Trivy",
       "Checkov",
       "MITRE Caldera",
       "nuclei"
      ]
     },
     {
      "t": "Write a cloud detection",
      "d": 4,
      "w": "Turn a technique into a query, test it, and document the false positive rate.",
      "q": [
       {
        "q": "What makes a cloud detection production ready?",
        "a": "A tested query, a documented false positive rate, a severity, and a written triage path."
       }
      ],
      "r": [
       "https://attack.mitre.org/",
       "https://cyberdefenders.org/",
       "https://docs.aws.amazon.com/",
       "https://trivy.dev/",
       "https://github.com/bridgecrewio/checkov",
       "https://caldera.mitre.org/",
       "https://github.com/projectdiscovery/nuclei"
      ],
      "p": 40,
      "rnames": [
       "MITRE ATT and CK",
       "CyberDefenders",
       "AWS Docs",
       "Trivy",
       "Checkov",
       "MITRE Caldera",
       "nuclei"
      ]
     },
     {
      "t": "Infrastructure as code drift",
      "d": 3,
      "w": "Detect when production diverges from the reviewed code, because that is where policy gets bypassed.",
      "q": [
       {
        "q": "What is configuration drift?",
        "a": "Production diverging from the reviewed code, usually from manual console changes nobody documented."
       }
      ],
      "r": [
       "https://github.com/bridgecrewio/checkov",
       "https://attack.mitre.org/",
       "https://cyberdefenders.org/",
       "https://docs.aws.amazon.com/",
       "https://trivy.dev/",
       "https://caldera.mitre.org/",
       "https://github.com/projectdiscovery/nuclei"
      ],
      "p": 40,
      "rnames": [
       "Checkov",
       "MITRE ATT and CK",
       "CyberDefenders",
       "AWS Docs",
       "Trivy",
       "MITRE Caldera",
       "nuclei"
      ]
     },
     {
      "t": "Prove the fix",
      "d": 3,
      "w": "Re-scan after every remediation. An unverified fix is not a fix.",
      "q": [
       {
        "q": "Why re-scan after fixing?",
        "a": "Because most remediation failures are partial, and you cannot claim a control you have not retested."
       }
      ],
      "r": [
       "https://attack.mitre.org/",
       "https://trivy.dev/",
       "https://cyberdefenders.org/",
       "https://docs.aws.amazon.com/",
       "https://github.com/bridgecrewio/checkov",
       "https://caldera.mitre.org/",
       "https://github.com/projectdiscovery/nuclei"
      ],
      "p": 40,
      "rnames": [
       "MITRE ATT and CK",
       "Trivy",
       "CyberDefenders",
       "AWS Docs",
       "Checkov",
       "MITRE Caldera",
       "nuclei"
      ]
     }
    ],
    "res": [
     [
      "MITRE ATT and CK",
      "https://attack.mitre.org/",
      "sword"
     ],
     [
      "CyberDefenders",
      "https://cyberdefenders.org/",
      "activity"
     ],
     [
      "AWS Docs",
      "https://docs.aws.amazon.com/",
      "book"
     ],
     [
      "Trivy",
      "https://trivy.dev/",
      "shield"
     ],
     [
      "Checkov",
      "https://github.com/bridgecrewio/checkov",
      "cog"
     ],
     [
      "MITRE Caldera",
      "https://caldera.mitre.org/",
      "sword"
     ],
     [
      "nuclei",
      "https://github.com/projectdiscovery/nuclei",
      "search"
     ]
    ]
   }
  ]
 },
 {
  "id": "vuln",
  "name": "Vulnerability Management",
  "icon": "radar",
  "hrs": 150,
  "role": "Vulnerability Management Engineer",
  "blurb": "31 percent of 2026 breaches start by exploiting unpatched software. This team decides what gets fixed first, which is a position of real influence.",
  "skills": [
   "CVSS and risk prioritisation",
   "Scanning and triage",
   "Patch management programs",
   "Asset inventory",
   "Remediation tracking and metrics"
  ],
  "stages": [
   {
    "id": "P3.1",
    "name": "Vuln Triage Fundamentals",
    "h": 40,
    "blurb": "Vulnerability management is prioritisation. Finding vulns is the easy part; deciding what to fix this week is the job.",
    "tasks": [
     {
      "t": "CVE and advisory basics",
      "d": 2,
      "w": "Know what a CVE identifies, and what it does not.",
      "q": [
       {
        "q": "Does a CVE tell you whether you are exploitable?",
        "a": "No. It identifies a vulnerability in a product. Whether it affects you depends on your version and configuration."
       }
      ],
      "r": [
       "https://cve.mitre.org/",
       "https://www.first.org/cvss/",
       "https://practical-devops.com/",
       "https://csrc.nist.gov/pubs/sp/800/40/r4/final",
       "https://www.first.org/epss",
       "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json",
       "https://openvas.org/"
      ],
      "p": 20,
      "rnames": [
       "CVE Program",
       "FIRST CVSS",
       "Practical DevOps",
       "NIST SP 800-40 Rev 4",
       "EPSS exploit score",
       "CISA KEV catalog",
       "OpenVAS"
      ]
     },
     {
      "t": "CVSS properly",
      "d": 3,
      "w": "Understand base, temporal and environmental scores, and why vendors disagree with your scanner.",
      "q": [
       {
        "q": "What is the environmental score group for?",
        "a": "Adjusting the base score for your specific environment, which is the only part you actually control."
       }
      ],
      "r": [
       "https://www.first.org/cvss/",
       "https://csrc.nist.gov/pubs/sp/800/40/r4/final",
       "https://cve.mitre.org/",
       "https://practical-devops.com/",
       "https://www.first.org/epss",
       "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json",
       "https://openvas.org/"
      ],
      "p": 30,
      "rnames": [
       "FIRST CVSS",
       "NIST SP 800-40 Rev 4",
       "CVE Program",
       "Practical DevOps",
       "EPSS exploit score",
       "CISA KEV catalog",
       "OpenVAS"
      ]
     },
     {
      "t": "Scan responsibly",
      "d": 3,
      "w": "Run an authenticated scan against an authorised host and interpret the results.",
      "q": [
       {
        "q": "Why do authenticated scans find more?",
        "a": "They log in and inventory actual installed versions instead of inferring them from open ports."
       }
      ],
      "r": [
       "https://practical-devops.com/",
       "https://cve.mitre.org/",
       "https://www.first.org/cvss/",
       "https://csrc.nist.gov/pubs/sp/800/40/r4/final",
       "https://www.first.org/epss",
       "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json",
       "https://openvas.org/"
      ],
      "p": 30,
      "rnames": [
       "Practical DevOps",
       "CVE Program",
       "FIRST CVSS",
       "NIST SP 800-40 Rev 4",
       "EPSS exploit score",
       "CISA KEV catalog",
       "OpenVAS"
      ]
     },
     {
      "t": "False positives",
      "d": 3,
      "w": "A scanner you do not trust gets ignored. Learn to validate and suppress properly.",
      "q": [
       {
        "q": "Why do teams disable scanners?",
        "a": "Because unvalidated findings pile up and the signal gets lost. Triage is the job, not the scanner."
       }
      ],
      "r": [
       "https://practical-devops.com/",
       "https://csrc.nist.gov/pubs/sp/800/40/r4/final",
       "https://cve.mitre.org/",
       "https://www.first.org/cvss/",
       "https://www.first.org/epss",
       "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json",
       "https://openvas.org/"
      ],
      "p": 40,
      "rnames": [
       "Practical DevOps",
       "NIST SP 800-40 Rev 4",
       "CVE Program",
       "FIRST CVSS",
       "EPSS exploit score",
       "CISA KEV catalog",
       "OpenVAS"
      ]
     }
    ],
    "res": [
     [
      "CVE Program",
      "https://cve.mitre.org/",
      "search"
     ],
     [
      "FIRST CVSS",
      "https://www.first.org/cvss/",
      "chart"
     ],
     [
      "Practical DevOps",
      "https://practical-devops.com/",
      "cog"
     ],
     [
      "NIST SP 800-40 Rev 4",
      "https://csrc.nist.gov/pubs/sp/800/40/r4/final",
      "book"
     ],
     [
      "EPSS exploit score",
      "https://www.first.org/epss",
      "chart"
     ],
     [
      "CISA KEV catalog",
      "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json",
      "shield"
     ],
     [
      "OpenVAS",
      "https://openvas.org/",
      "search"
     ]
    ]
   },
   {
    "id": "P3.2",
    "name": "Patch Programs and Metrics",
    "h": 45,
    "blurb": "This is the part that is management-facing, and it is why the role exists above the scanner operator level.",
    "tasks": [
     {
      "t": "Risk based patching",
      "d": 3,
      "w": "Patch by exposure and exploitability, not by scanner severity alone.",
      "q": [
       {
        "q": "What makes a patch high priority?",
        "a": "Known exploitation in the wild, internet exposure, and asset criticality. Severity alone is a poor proxy."
       }
      ],
      "r": [
       "https://csrc.nist.gov/pubs/sp/800/40/r4/final",
       "https://opencve.io/",
       "https://www.first.org/cvss/",
       "https://practical-devops.com/",
       "https://cyberdefenders.org/",
       "https://www.first.org/epss",
       "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json"
      ],
      "p": 30,
      "rnames": [
       "CyberMap",
       "NIST SP 800-40 Rev 4",
       "FIRST CVSS",
       "Practical DevOps",
       "CyberDefenders",
       "EPSS exploit score",
       "CISA KEV catalog"
      ]
     },
     {
      "t": "Asset inventory",
      "d": 3,
      "w": "You cannot patch what you do not know you have. Inventory is the foundation.",
      "q": [
       {
        "q": "Why does inventory come first?",
        "a": "Vulnerability management is matching vulnerabilities to assets. No inventory, no matching, no prioritisation."
       }
      ],
      "r": [
       "https://opencve.io/",
       "https://csrc.nist.gov/pubs/sp/800/40/r4/final",
       "https://www.first.org/cvss/",
       "https://practical-devops.com/",
       "https://cyberdefenders.org/",
       "https://www.first.org/epss",
       "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json"
      ],
      "p": 30,
      "rnames": [
       "CyberMap",
       "NIST SP 800-40 Rev 4",
       "FIRST CVSS",
       "Practical DevOps",
       "CyberDefenders",
       "EPSS exploit score",
       "CISA KEV catalog"
      ]
     },
     {
      "t": "Metrics that mean something",
      "d": 4,
      "w": "Mean time to remediate and patch compliance, but reported honestly.",
      "q": [
       {
        "q": "What is the most abused vulnerability metric?",
        "a": "Raw scan count. More findings usually means better scanning, not a worse environment."
       }
      ],
      "r": [
       "https://csrc.nist.gov/pubs/sp/800/40/r4/final",
       "https://www.first.org/cvss/",
       "https://practical-devops.com/",
       "https://opencve.io/",
       "https://cyberdefenders.org/",
       "https://www.first.org/epss",
       "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json"
      ],
      "p": 40,
      "rnames": [
       "NIST SP 800-40 Rev 4",
       "FIRST CVSS",
       "Practical DevOps",
       "CyberMap",
       "CyberDefenders",
       "EPSS exploit score",
       "CISA KEV catalog"
      ]
     },
     {
      "t": "Exception handling",
      "d": 4,
      "w": "Document risk acceptances with an owner and an expiry, or they become permanent.",
      "q": [
       {
        "q": "What makes an exception valid?",
        "a": "A named owner, a written justification, a compensating control, and a review date."
       }
      ],
      "r": [
       "https://csrc.nist.gov/pubs/sp/800/40/r4/final",
       "https://opencve.io/",
       "https://www.first.org/cvss/",
       "https://practical-devops.com/",
       "https://cyberdefenders.org/",
       "https://www.first.org/epss",
       "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json"
      ],
      "p": 40,
      "rnames": [
       "NIST SP 800-40 Rev 4",
       "CyberMap",
       "FIRST CVSS",
       "Practical DevOps",
       "CyberDefenders",
       "EPSS exploit score",
       "CISA KEV catalog"
      ]
     }
    ],
    "res": [
     [
      "NIST SP 800-40 Rev 4",
      "https://csrc.nist.gov/pubs/sp/800/40/r4/final",
      "book"
     ],
     [
      "FIRST CVSS",
      "https://www.first.org/cvss/",
      "chart"
     ],
     [
      "Practical DevOps",
      "https://practical-devops.com/",
      "cog"
     ],
     [
      "CyberMap",
      "https://opencve.io/",
      "radar"
     ],
     [
      "CyberDefenders",
      "https://cyberdefenders.org/",
      "activity"
     ],
     [
      "EPSS exploit score",
      "https://www.first.org/epss",
      "chart"
     ],
     [
      "CISA KEV catalog",
      "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json",
      "shield"
     ]
    ]
   },
   {
    "id": "P3.3",
    "name": "Offensive Validation",
    "h": 65,
    "blurb": "Prove a vulnerability is real so the fix gets prioritised. This is where your red team background becomes an asset rather than a liability.",
    "tasks": [
     {
      "t": "Reproduce safely",
      "d": 4,
      "w": "Confirm a finding in an authorised lab before escalating it.",
      "q": [
       {
        "q": "Why reproduce before reporting?",
        "a": "A false positive that reaches engineering destroys credibility for the whole programme."
       }
      ],
      "r": [
       "https://overthewire.org/wargames/"
      ],
      "p": 40,
      "rnames": [
       "OverTheWire Wargames"
      ]
     },
     {
      "t": "Write a defensible report",
      "d": 3,
      "w": "Reproduction steps, evidence, impact and remediation. Every time.",
      "q": [
       {
        "q": "What makes a vuln report defensible?",
        "a": "Exact reproduction steps, evidence of impact, and a specific fix. Anything else is noise."
       }
      ],
      "r": [
       "https://portswigger.net/web-security"
      ],
      "p": 40,
      "rnames": [
       "PortSwigger Academy"
      ]
     },
     {
      "t": "Chained risk",
      "d": 5,
      "w": "Understand that low severity findings chain into a critical path, and report the chain.",
      "q": [
       {
        "q": "Why look for chains?",
        "a": "Three medium findings that combine into full compromise matter more than one high finding you cannot use."
       }
      ],
      "r": [
       "https://portswigger.net/web-security"
      ],
      "p": 50,
      "rnames": [
       "PortSwigger Academy"
      ]
     },
     {
      "t": "Automate the check",
      "d": 4,
      "w": "Turn a manual verification into a repeatable script so the next occurrence is caught instantly.",
      "q": [
       {
        "q": "What does automation buy you here?",
        "a": "Consistency and speed of re-verification, especially after a patch is applied."
       }
      ],
      "r": [
       "https://overthewire.org/wargames/",
       "https://practical-devops.com/"
      ],
      "p": 50,
      "rnames": [
       "OverTheWire Wargames",
       "Practical DevOps"
      ]
     }
    ],
    "res": [
     [
      "OverTheWire Wargames",
      "https://overthewire.org/wargames/",
      "terminal"
     ],
     [
      "PortSwigger Academy",
      "https://portswigger.net/web-security",
      "globe"
     ],
     [
      "OWASP Top 10",
      "https://owasp.org/www-project-top-ten/",
      "shield"
     ],
     [
      "VulnHub",
      "https://www.vulnhub.com/",
      "server"
     ],
     [
      "Practical DevOps",
      "https://practical-devops.com/",
      "cog"
     ]
    ]
   }
  ]
 },
 {
  "id": "ir",
  "name": "Incident Response",
  "icon": "activity",
  "hrs": 150,
  "role": "Incident Responder / DFIR Engineer",
  "blurb": "The most natural promotion from SOC. You already handle alerts daily; this adds forensics, containment and the writing that incident work demands.",
  "skills": [
   "Digital forensics and evidence handling",
   "Containment and eradication",
   "Incident documentation and reporting",
   "Chain of custody",
   "Timeline reconstruction"
  ],
  "stages": [
   {
    "id": "P4.1",
    "name": "Forensic Fundamentals",
    "h": 45,
    "blurb": "Incident response is evidence work. Everything you touch needs a defensible chain of custody.",
    "tasks": [
     {
      "t": "Order of volatility",
      "d": 2,
      "w": "Collect the most perishable evidence first or lose it.",
      "q": [
       {
        "q": "What is the correct collection order?",
        "a": "CPU registers and cache, then RAM, then network state, then disk, then backups and physical media."
       }
      ],
      "r": [
       "https://cyberdefenders.org/",
       "https://www.ericzimmerman.com/"
      ],
      "p": 20,
      "rnames": [
       "CyberDefenders",
       "Eric Zimmerman Tools"
      ]
     },
     {
      "t": "Chain of custody",
      "d": 3,
      "w": "Document every hand-off of evidence or the finding is inadmissible later.",
      "q": [
       {
        "q": "What does a chain of custody record?",
        "a": "Who handled the evidence, when, and what was done to it. A single undocumented gap can discredit evidence."
       }
      ],
      "r": [
       "https://cyberdefenders.org/",
       "https://practicalmalwareanalysis.com/"
      ],
      "p": 30,
      "rnames": [
       "CyberDefenders",
       "Practical Malware Analysis"
      ]
     },
     {
      "t": "Memory forensics",
      "h": 0,
      "d": 3,
      "w": "Read process and network state from RAM. Triage lives or dies here.",
      "q": [
       {
        "q": "Why is memory worth capturing first?",
        "a": "Encryption keys, running malware and live connections exist only in RAM. Once the machine reboots they are gone."
       }
      ],
      "r": [
       "https://cyberdefenders.org/"
      ],
      "p": 30,
      "rnames": [
       "CyberDefenders"
      ]
     },
     {
      "t": "Disk and log analysis",
      "d": 4,
      "w": "Timeline from artifacts, then corroborate with logs.",
      "q": [
       {
        "q": "Why build a timeline?",
        "a": "Establishing when and how access occurred is what turns an incident into a defensible finding."
       }
      ],
      "r": [
       "https://cyberdefenders.org/",
       "https://practicalmalwareanalysis.com/"
      ],
      "p": 40,
      "rnames": [
       "CyberDefenders",
       "Practical Malware Analysis"
      ]
     }
    ],
    "res": [
     [
      "CyberDefenders",
      "https://cyberdefenders.org/",
      "activity"
     ],
     [
      "Eric Zimmerman Tools",
      "https://www.ericzimmerman.com/",
      "search"
     ],
     [
      "Practical Malware Analysis",
      "https://practicalmalwareanalysis.com/",
      "book"
     ],
     [
      "Blue Team Labs Online",
      "https://blueteamlabs.online/",
      "shield"
     ]
    ]
   },
   {
    "id": "P4.2",
    "name": "Containment and Eradication",
    "h": 45,
    "blurb": "Most organisations handle detection far better than containment. Being good at this is a promotion.",
    "tasks": [
     {
      "t": "Decide: contain or monitor",
      "d": 4,
      "w": "Sometimes staying quiet and watching is the right call. Know when.",
      "q": [
       {
        "q": "When is monitoring better than containment?",
        "a": "When the adversary is not yet inside, or when containment would tip them off before you understand the scope."
       }
      ],
      "r": [
       "https://letsdefend.io/"
      ],
      "p": 40,
      "rnames": [
       "LetsDefend"
      ]
     },
     {
      "t": "Scope the breach",
      "d": 4,
      "w": "Establish what was reached, not what you assume was reached.",
      "q": [
       {
        "q": "How do you establish scope?",
        "a": "Identity first: review who authenticated, from where, and what they did. Attackers move by credential far more often than by exploit."
       }
      ],
      "r": [
       "https://blueteamlabs.online/",
       "https://cyberdefenders.org/"
      ],
      "p": 40,
      "rnames": [
       "Blue Team Labs Online",
       "CyberDefenders"
      ]
     },
     {
      "t": "Eradicate and recover",
      "d": 3,
      "w": "Remove persistence, restore cleanly, verify before reopening.",
      "q": [
       {
        "q": "Why does recovery need verification?",
        "a": "Restoring from backup that was itself compromised reinfects the environment. Verify the source before you trust it."
       }
      ],
      "r": [
       "https://cyberdefenders.org/",
       "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
      ],
      "p": 40,
      "rnames": [
       "CyberDefenders",
       "NIST Incident Handling"
      ]
     },
     {
      "t": "Write the report",
      "d": 3,
      "w": "Timeline, root cause, impact and the fixes, in language a non-technical stakeholder can act on.",
      "q": [
       {
        "q": "What does an executive summary need?",
        "a": "Impact in business terms, what was done, what remains, and what changes so it does not recur."
       }
      ],
      "r": [
       "https://blueteamlabs.online/",
       "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
      ],
      "p": 40,
      "rnames": [
       "Blue Team Labs Online",
       "NIST Incident Handling"
      ]
     }
    ],
    "res": [
     [
      "Blue Team Labs Online",
      "https://blueteamlabs.online/",
      "shield"
     ],
     [
      "LetsDefend",
      "https://letsdefend.io/",
      "radar"
     ],
     [
      "CyberDefenders",
      "https://cyberdefenders.org/",
      "activity"
     ],
     [
      "NIST Incident Handling",
      "https://csrc.nist.gov/pubs/sp/800/61/r2/final",
      "book"
     ]
    ]
   },
   {
    "id": "P4.3",
    "name": "Purple Teaming",
    "h": 60,
    "blurb": "Attack and defend in the same exercise. This is how security engineers prove a control works instead of assuming it does.",
    "tasks": [
     {
      "t": "Define objectives",
      "d": 3,
      "w": "Purple teaming is scoped and hypothesis driven, unlike CTF.",
      "q": [
       {
        "q": "How is a purple team exercise different from a CTF?",
        "a": "It tests whether specific detections and controls actually fire, against a real agreed technique set."
       }
      ],
      "r": [
       "https://attack.mitre.org/",
       "https://cyberdefenders.org/"
      ],
      "p": 30,
      "rnames": [
       "MITRE ATT and CK",
       "CyberDefenders"
      ]
     },
     {
      "t": "Atomic testing",
      "d": 4,
      "w": "Run atomic tests in an authorised environment and record which detections fired.",
      "q": [
       {
        "q": "What is the point of atomic testing?",
        "a": "Testing one technique at a time tells you exactly which control or rule missed it, instead of a vague gap."
       }
      ],
      "r": [
       "https://attack.mitre.org/",
       "https://blueteamlabs.online/"
      ],
      "p": 40,
      "rnames": [
       "MITRE ATT and CK",
       "Blue Team Labs Online"
      ]
     },
     {
      "t": "Close the loop",
      "d": 4,
      "w": "Every gap becomes a ticket. This is where the team actually improves.",
      "q": [
       {
        "q": "What separates purple teaming from pentesting?",
        "a": "The output. Purple teams produce detection and control gaps with owners, not a findings list."
       }
      ],
      "r": [
       "https://blueteamlabs.online/",
       "https://cyberdefenders.org/"
      ],
      "p": 40,
      "rnames": [
       "Blue Team Labs Online",
       "CyberDefenders"
      ]
     },
     {
      "t": "Report honestly",
      "d": 3,
      "w": "Include what was not tested. A purple team report that hides its gaps is worse than none.",
      "q": [
       {
        "q": "Why report what you did not test?",
        "a": "Because an untested control reads as a passing control, and someone will rely on that assumption."
       }
      ],
      "r": [
       "https://attack.mitre.org/",
       "https://www.nist.gov/cyberframework"
      ],
      "p": 40,
      "rnames": [
       "MITRE ATT and CK",
       "NIST Cybersecurity Framework"
      ]
     }
    ],
    "res": [
     [
      "MITRE ATT and CK",
      "https://attack.mitre.org/",
      "sword"
     ],
     [
      "Blue Team Labs Online",
      "https://blueteamlabs.online/",
      "shield"
     ],
     [
      "CyberDefenders",
      "https://cyberdefenders.org/",
      "activity"
     ],
     [
      "NIST Cybersecurity Framework",
      "https://www.nist.gov/cyberframework",
      "book"
     ]
    ]
   }
  ]
 },
 {
  "id": "lead",
  "name": "Security Engineer Core",
  "icon": "shield",
  "hrs": 190,
  "role": "Security Engineer (generalist)",
  "blurb": "The broadest path, and the closest to the title you actually want. Mixes secure design, tooling and the engineering discipline that gets you promoted.",
  "skills": [
   "Security design review",
   "Tooling and automation",
   "Security requirements in the SDLC",
   "Cross-team communication",
   "Security metrics for management"
  ],
  "stages": [
   {
    "id": "P5.1",
    "name": "Security in the SDLC",
    "h": 45,
    "blurb": "Security engineers win by being useful to engineers, not by being gatekeepers.",
    "tasks": [
     {
      "t": "Where security belongs",
      "d": 2,
      "w": "Not a final gate. It belongs in every phase, cheaply applied.",
      "q": [
       {
        "q": "Why does a late security review fail?",
        "a": "By then the design is built, so the only remaining options are expensive: rewrite or accept the risk."
       }
      ],
      "r": [
       "https://cheatsheetseries.owasp.org/",
       "https://semgrep.dev/"
      ],
      "p": 20,
      "rnames": [
       "OWASP Cheat Sheets",
       "Semgrep"
      ]
     },
     {
      "t": "Write a threat model in an hour",
      "d": 3,
      "w": "Ship a lightweight model people will actually read.",
      "q": [
       {
        "q": "What makes a threat model get used?",
        "a": "It is short, specific to this design, and actionable. A 40 page generic document is ignored."
       }
      ],
      "r": [
       "https://cheatsheetseries.owasp.org/",
       "https://slsa.dev/"
      ],
      "p": 30,
      "rnames": [
       "OWASP Cheat Sheets",
       "SLSA"
      ]
     },
     {
      "t": "Security requirements",
      "d": 3,
      "w": "Turn policies into testable engineering requirements.",
      "q": [
       {
        "q": "What is a testable security requirement?",
        "a": "One with an observable pass condition, like every endpoint requires authentication."
       }
      ],
      "r": [
       "https://cheatsheetseries.owasp.org/",
       "https://slsa.dev/"
      ],
      "p": 30,
      "rnames": [
       "OWASP Cheat Sheets",
       "SLSA"
      ]
     },
     {
      "t": "Automation and guardrails",
      "d": 4,
      "w": "Turn the thing you review every time into a tool that checks it every time.",
      "q": [
       {
        "q": "What is the highest leverage security automation?",
        "a": "Pre-commit and CI checks. A rule that blocks a bad merge beats a review comment every time."
       }
      ],
      "r": [
       "https://semgrep.dev/",
       "https://www.nist.gov/cyberframework"
      ],
      "p": 40,
      "rnames": [
       "Semgrep",
       "NIST CSF 2.0"
      ]
     }
    ],
    "res": [
     [
      "OWASP Cheat Sheets",
      "https://cheatsheetseries.owasp.org/",
      "book"
     ],
     [
      "Semgrep",
      "https://semgrep.dev/",
      "shield"
     ],
     [
      "Gitleaks",
      "https://github.com/gitleaks/gitleaks",
      "search"
     ],
     [
      "SLSA",
      "https://slsa.dev/",
      "book"
     ],
     [
      "NIST CSF 2.0",
      "https://www.nist.gov/cyberframework",
      "book"
     ]
    ]
   },
   {
    "id": "P5.2",
    "name": "Security Tooling",
    "h": 50,
    "blurb": "Write the tools your team needs. Your Python from Phase 0 turns into real leverage here.",
    "tasks": [
     {
      "t": "Wire the toolchain",
      "d": 3,
      "w": "Connect scanning, secrets detection and IaC checks into one pipeline.",
      "q": [
       {
        "q": "What makes a security pipeline useful?",
        "a": "It blocks on real problems and does not cry wolf. A noisy gate gets disabled within a week."
       }
      ],
      "r": [
       "https://semgrep.dev/",
       "https://github.com/gitleaks/gitleaks"
      ],
      "p": 30,
      "rnames": [
       "Semgrep",
       "Gitleaks"
      ]
     },
     {
      "t": "Write a custom check",
      "d": 4,
      "w": "Write a Semgrep rule or a policy check that encodes a rule your team keeps forgetting.",
      "q": [
       {
        "q": "Why custom rules beat generic scanning?",
        "a": "They encode your context, so the findings are actionable instead of theoretical."
       }
      ],
      "r": [
       "https://semgrep.dev/",
       "https://codeql.github.com/"
      ],
      "p": 40,
      "rnames": [
       "Semgrep",
       "GitHub CodeQL"
      ]
     },
     {
      "t": "Test your own tooling",
      "d": 3,
      "w": "A security tool that false-positives is worse than none.",
      "q": [
       {
        "q": "What is the first test for a new scanner?",
        "a": "Run it against code you know is vulnerable AND code you know is safe, and check both results."
       }
      ],
      "r": [
       "https://trivy.dev/",
       "https://github.com/bridgecrewio/checkov"
      ],
      "p": 30,
      "rnames": [
       "Trivy",
       "Checkov"
      ]
     },
     {
      "t": "Ship it properly",
      "d": 3,
      "w": "Version it, document it, and get adoption before building more.",
      "q": [
       {
        "q": "Why does adoption matter more than features?",
        "a": "A tool nobody runs provides zero security value regardless of how good it is."
       }
      ],
      "r": [
       "https://codeql.github.com/",
       "https://github.com/gitleaks/gitleaks"
      ],
      "p": 40,
      "rnames": [
       "GitHub CodeQL",
       "Gitleaks"
      ]
     }
    ],
    "res": [
     [
      "Semgrep",
      "https://semgrep.dev/",
      "shield"
     ],
     [
      "GitHub CodeQL",
      "https://codeql.github.com/",
      "code"
     ],
     [
      "Trivy",
      "https://trivy.dev/",
      "shield"
     ],
     [
      "Checkov",
      "https://github.com/bridgecrewio/checkov",
      "cog"
     ],
     [
      "Gitleaks",
      "https://github.com/gitleaks/gitleaks",
      "search"
     ]
    ]
   },
   {
    "id": "P5.3",
    "name": "Communication and Leadership",
    "h": 50,
    "blurb": "The actual barrier between senior engineer and engineer. Write clearly, argue with evidence, and manage risk in business terms.",
    "tasks": [
     {
      "t": "Write a finding people act on",
      "d": 3,
      "w": "Severity, impact, effort and a specific fix. Four lines.",
      "q": [
       {
        "q": "What is the most common failure in security reporting?",
        "a": "Reporting the technical detail without the business impact, so nobody can prioritise it."
       }
      ],
      "r": [
       "https://cyberdefenders.org/"
      ],
      "p": 30,
      "rnames": [
       "CyberDefenders"
      ]
     },
     {
      "t": "Risk in business language",
      "d": 3,
      "w": "Translate technical risk into cost, likelihood and consequence.",
      "q": [
       {
        "q": "What does an executive need from a security engineer?",
        "a": "A decision, not a problem. What the risk is, what it costs, and what the options are."
       }
      ],
      "r": [
       "https://www.nist.gov/cyberframework",
       "https://www.nist.gov/itl/smallbusinesscyber"
      ],
      "p": 30,
      "rnames": [
       "NIST Cybersecurity Framework",
       "NIST Small Business Cybersecurity"
      ]
     },
     {
      "t": "Disagree productively",
      "d": 4,
      "w": "Push back with evidence and offer an alternative, not just an objection.",
      "q": [
       {
        "q": "How do you escalate a security dispute?",
        "a": "Document the risk, propose a proportionate mitigation, and make the residual risk explicit in writing so the decision is owned."
       }
      ],
      "r": [
       "https://www.nist.gov/cyberframework"
      ],
      "p": 40,
      "rnames": [
       "NIST Cybersecurity Framework"
      ]
     },
     {
      "t": "Mentor and review",
      "d": 4,
      "w": "Level up others. This is what senior engineers are measured on.",
      "q": [
       {
        "q": "What is the practical difference between a senior and a mid-level engineer?",
        "a": "Senior engineers multiply others through review, standards and mentoring rather than only executing well themselves."
       }
      ],
      "r": [
       "https://cyberdefenders.org/"
      ],
      "p": 40,
      "rnames": [
       "CyberDefenders"
      ]
     }
    ],
    "res": [
     [
      "NIST Cybersecurity Framework",
      "https://www.nist.gov/cyberframework",
      "book"
     ],
     [
      "NIST Small Business Cybersecurity",
      "https://www.nist.gov/itl/smallbusinesscyber",
      "users"
     ],
     [
      "CISA",
      "https://www.cisa.gov/",
      "shield"
     ],
     [
      "CyberDefenders",
      "https://cyberdefenders.org/",
      "activity"
     ]
    ]
   },
   {
    "id": "P5.4",
    "name": "Capstone: Ship a Security Tool",
    "h": 45,
    "blurb": "Your existing tools are the portfolio. This stage turns them into something a security engineer would actually hire.",
    "tasks": [
     {
      "t": "Pick your gap",
      "d": 2,
      "w": "Choose something a real security team would run, not a toy.",
      "q": [
       {
        "q": "What makes a security tool worth shipping?",
        "a": "It removes work someone does repeatedly by hand, and it can be run safely by a stranger."
       }
      ],
      "r": [
       "https://github.com/Diavolo148888",
       "https://semgrep.dev/"
      ],
      "p": 20,
      "rnames": [
       "GitHub",
       "Semgrep"
      ]
     },
     {
      "t": "Build it properly",
      "d": 4,
      "w": "Real input validation, error handling, tests and a safe default configuration.",
      "q": [
       {
        "q": "What must a security tool never do by default?",
        "a": "Touch systems it was not pointed at. Safe defaults matter more than features in this category."
       }
      ],
      "r": [
       "https://semgrep.dev/",
       "https://trivy.dev/"
      ],
      "p": 40,
      "rnames": [
       "Semgrep",
       "Trivy"
      ]
     },
     {
      "t": "Document for adoption",
      "d": 3,
      "w": "README, threat model, demo and a clear statement of what it does NOT cover.",
      "q": [
       {
        "q": "Why state what a tool does not cover?",
        "a": "Because someone will rely on it as a control, and an unstated gap becomes a false assumption."
       }
      ],
      "r": [
       "https://github.com/Diavolo148888",
       "https://cheatsheetseries.owasp.org/"
      ],
      "p": 40,
      "rnames": [
       "GitHub",
       "OWASP Cheat Sheets"
      ]
     },
     {
      "t": "Get external feedback",
      "d": 3,
      "w": "Have a security engineer outside your circle try to break it.",
      "q": [
       {
        "q": "Who should test your security tool?",
        "a": "Someone who does not already trust your assumptions. Familiarity hides exactly the bugs that matter."
       }
      ],
      "r": [
       "https://github.com/Diavolo148888",
       "https://www.hackerone.com/hackers"
      ],
      "p": 40,
      "rnames": [
       "GitHub",
       "HackerOne"
      ]
     }
    ],
    "res": [
     [
      "GitHub",
      "https://github.com/Diavolo148888",
      "users"
     ],
     [
      "Semgrep",
      "https://semgrep.dev/",
      "shield"
     ],
     [
      "OWASP Cheat Sheets",
      "https://cheatsheetseries.owasp.org/",
      "book"
     ],
     [
      "Trivy",
      "https://trivy.dev/",
      "shield"
     ],
     [
      "HackerOne",
      "https://www.hackerone.com/hackers",
      "flag"
     ]
    ]
   }
  ]
 }
];
