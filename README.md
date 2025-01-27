
# Y2K38 - Report

Search page for the list of known open / closed issues relating to Y2K38 issues.

<br/>

[![Badge - Discord]][Discord]

<br/>

## Status

- Collecting more issues

- Improving indexer

- Working on search page

<br/>

## Search Ideas & Aspects

- Client side processing only

- Optimize index to key less values -> CSV?

- Quick search for projects with / without open issues / merges

- Add tags to project data / search

- Client side pagination

- Use url params for query & page

- Lazy loaded project icons

- Link repository / website

<br/>

## Contributions

Right now collecting issues is the best way of helping.

*And correcting collected information.*

### Workflow

- Find issue not yet indexed

- Fork the repository

- Create a new file / change existing in `/Data/Projects/`

- The file should have a readable & related name to the project name

    Replace spaces with `-`

- Use the template found in `/Data/Project-Template.toml`

    Remove sections you don't need / have.

- If possible make one commit for each project / issue / merge

    Add a reference to the issue(s) / merge(s) in the 
    commit description in the following format : 
    
    `\<Organization>/\<Project>#<Issue/Merge>

    -> `SoftwareMakers/ToolX#234`

- Create a pull request

[Badge - Discord]: https://img.shields.io/badge/Discord-white?style=for-the-badge&logo=discord&logoColor=%23FFFFFF&labelColor=%235865F2&color=%235865F2
[Discord]: https://discord.gg/a5RhQWXawN
