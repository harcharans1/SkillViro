# SkillViro project fix

This patch fixes:

- Featured `Start Project` navigation
- Project Details `Start Project` navigation
- Duplicate project data
- Dynamic workspace project information
- Dynamic workspace technologies
- Project-specific workspace tasks
- Project-specific progress
- Missing `tasks` property in the Project model
- TypeScript `rootDir` configuration warning

## Apply

1. Extract this ZIP.
2. Open PowerShell in your local `B:\projects\SkillViro` repository.
3. Run:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\apply-skillviro-fix.ps1
```

4. Then run:

```powershell
npm install
npm run build
npm start
```

## Test

- `/projects`
- `/projects/e-commerce-platform`
- `/projects/e-commerce-platform/workspace`
- `/projects/task-management-app/workspace`
- `/projects/portfolio-website/workspace`
- `/projects/skill-learning-platform/workspace`
