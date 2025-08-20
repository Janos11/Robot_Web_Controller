# 🚀 Git Cheat Sheet

Your quick reference to essential Git commands while developing!

---

## 🔧 Setup

| Command | Description |
|--------|-------------|
| `git config --global user.name "Your Name"` | Set your Git username |
| `git config --global user.email "you@example.com"` | Set your Git email |
| `git config --global credential.helper store git push` |  Store GitHub password locally so you don’t enter it every time |
| `git config --list` | Check Git configuration |
| `git --version` | Show Git version |

---

## 🛠️ Starting a Project

| Command | Description |
|--------|-------------|
| `git init` | Initialize a new Git repo |
| `git clone <repo_url>` | Clone a remote repo locally |
| `git remote -v` | Show remote URLs |

---

## 📁 Staging & Committing

| Command | Description |
|--------|-------------|
| `git status` | See modified/added files |
| `git add <file>` | Stage a specific file |
| `git add .` | Stage all changes |
| `git reset HEAD <file>` | Unstage a file (keep changes) |
| `git commit -m "message"` | Commit staged changes with a message |
| `git rm <file>` | Remove a tracked file |
| `git restore <file>` | Discard changes to a file |
| `git log` | View commit history |
| `git log` | Press q to quit the git log | git log |

---

## 🔄 Working with Remotes

| Command                            | Description                                              |
|------------------------------------|----------------------------------------------------------|
| `git remote add origin <url>`      | Link local repo to remote                                |
| `git push -u origin master`        | Push first time with upstream tracking                   |
| `git push -u origin main`          | Push first time with upstream tracking (for main branch) |
| `git remote -v`                    | Check remote                                             |
| `git push`                         | Push changes to remote                                   |
| `git pull`                         | Pull latest changes from remote                          |
| `git pull origin <another_branch>` | Pull changes from a specific branch on the remote without switching to it  |
| `git fetch`                        | Fetch changes without merging                            |


📝 Use `git push -u origin main` if your default branch is main (GitHub default since Oct 2020).<br/>
This sets the upstream so you can just run git push or git pull without specifying the branch.

---

## 🌿 Branching

| Command | Description |
|--------|-------------|
| `git branch` | List local branches |
| `git branch <name>` | Create a new branch |
| `git branch -m <old> <new>` | Rename a local branch |
| `git checkout <name>` | Switch to a branch |
| `git checkout -b <name>` | Create and switch to new branch |
| `git merge <branch>` | Merge another branch into current one |
| `git branch -d <name>` | Delete a branch |


---

## 🌐 Remote Branch Management

| Command | Description |
|--------|-------------|
| `git push origin --delete <branch>` | ❌ Delete a branch on remote (e.g., GitHub) |
| `git push -u origin <new_branch>` | ✅ Push and track a renamed or new branch |
| `git branch --set-upstream-to=origin/<remote_branch> <local_branch>` | 🔄 Set upstream remote for an existing local branch |
| `git checkout -b <local_branch> origin/<remote_branch>` | 📥 Create and track a remote branch locally |
| `git branch -vv` | 🔍 Check if local branch is correctly tracking remote |
| `git branch -m <old> <new>` | ✏️ Rename your local branch before pushing again |

---

## 🧹 Cleaning Up

| Command | Description |
|--------|-------------|
| `git clean -fd` | Remove untracked files and dirs |
| `git reset --hard` | Undo all local changes (DANGER) |
| `git stash` | Save uncommitted changes temporarily |
| `git stash pop` | Re-apply stashed changes |

---

## 🔐 Authentication

| Command | Description |
|--------|-------------|
| Use a **Personal Access Token (PAT)** instead of your password for HTTPS: |
| Go to [GitHub → Settings → Developer settings → PATs](https://github.com/settings/tokens) |

---

## 📎 Extras

| Tip                             | Command |
|---------------------------------|---------|
| View `.gitignore -d` files       | `git ls-files --others --ignored --exclude-standard` |
| See changes visually            | `git diff` |
| Undo last commit (keep changes) | `git reset --soft HEAD~1` |

---

## 📚 Useful Git Resources

| Resource                 | Link                                                                                                                     | Description                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| Official Git Book        | [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2)                                                         | Comprehensive and free      |
| Git Cheatsheet           | [https://education.github.com/git-cheat-sheet-education.pdf](https://education.github.com/git-cheat-sheet-education.pdf) | Handy commands reference    |
| Interactive Rebase Guide | [https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) | Deep dive into rebasing     |
| Atlassian Git Tutorials  | [https://www.atlassian.com/git/tutorials](https://www.atlassian.com/git/tutorials)                                       | Clear, beginner-to-advanced |

Happy coding 🚀

