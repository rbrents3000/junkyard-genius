# Security & Safety Reporting

## Reporting Safety Issues in Builds

If you find **incorrect, incomplete, or dangerous safety information** in any build, this is our **highest-priority issue type**.

### How to Report

1. **Open an issue** using the [Bug Report / Correction](https://github.com/rbrents3000/junkyard-genius/issues/new?template=bug-report.yml) template
2. Check the **"This is a safety concern"** checkbox
3. Include:
   - Which build file (e.g., `categories/fire-and-plasma/002-lichtenberg-wood-burner.md`)
   - What's wrong or missing (e.g., "Safety notes don't mention capacitor discharge procedure")
   - What the correct information should be

Safety issues are triaged immediately and take priority over all other work.

### What Counts as a Safety Issue

- Missing hazard warnings (electrical, chemical, fire, mechanical)
- Incorrect voltages, temperatures, or chemical quantities
- Missing PPE requirements
- Steps that could cause injury if followed as written
- Dangerous chemical combinations not flagged
- Missing ventilation or distance requirements

## Reporting Security Vulnerabilities

This is a static content repository (markdown files only) with no server-side code, databases, or user authentication. There is no traditional attack surface.

If you find a security issue with the **GitHub Actions workflows** or **repository configuration**, open a private vulnerability report via GitHub's [security advisories](https://github.com/rbrents3000/junkyard-genius/security/advisories/new).

## Safety Resources

- [General Safety Guide](../safety/README.md)
- [High Voltage Safety](../safety/high-voltage.md)
- [Chemical Safety](../safety/chemicals.md)
- [Fire & Pyro Safety](../safety/fire-and-pyro.md)
