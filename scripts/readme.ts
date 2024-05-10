import path from 'node:path'
import fse from 'fs-extra'
import fg from 'fast-glob'

interface Quiz {
  no: number
  difficulty: string
  title?: string
}

async function loadFile(dir: string) {
  return fse.readFile('./index/README.md', 'utf-8')
}

function loadQuiz(dir: string): Quiz {
  const no = Number(dir.match(/^(\d+)-.*/)[1])
  const difficulty = dir.match(/^\d+-(.+?)-.*$/)[1]
  const title = dir.match(/^\d+-.+?-(.*)$/)[1]
  return {
    no,
    difficulty,
    title,
  }
}

const QUIZ_ROOT = path.resolve(__dirname, 'questions')
async function loadQuizzes() {
  const dirs = await fg('{0..9}*-*', {
    cwd: QUIZ_ROOT,
    onlyDirectories: true,
  })
  return dirs.map(loadQuiz)
}

async function updateIndexREADMEs(quizzes: Quiz[]) {

}

async function updateREADMEs() {
  const quizzes = await loadQuizzes()
  quizzes.sort((a, b) => a.no - b.no)
  console.log(quizzes)

  // updateIndexREADMEs(quizzes)
}

updateREADMEs()
