/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import { FormOptions, Field } from 'tinacms'
import { GitFile } from './useGitFileSha'
import { useGithubFileForm } from './useGithubFileForm'

interface Options<T = any> {
  id?: string
  label?: string
  fields?: Field[]
  actions?: FormOptions<T>['actions']
}

const serialize = (formData: any) => {
  return JSON.stringify(formData, null, 2)
}

export function useGithubJsonForm<T = any>(jsonFile: GitFile<T>, formOptions?: Options<T>) {
  return useGithubFileForm<T>(jsonFile, {
    ...formOptions,
    serialize,
  })
}
