import tailwindMerge, {
  ClassValidator,
  Config,
  DefaultClassGroupIds,
  DefaultThemeGroupIds,
} from "tailwind-merge"

declare module "tailwind-merge" {
  interface ConfigStatic {
    /**
     * Integer indicating size of LRU cache used for memoizing results.
     * - Cache might be up to twice as big as `cacheSize`
     * - No cache is used for values <= 0
     */
    cacheSize: number
    /**
     * Prefix added to Tailwind-generated classes
     * @see https://tailwindcss.com/docs/configuration#prefix
     */
    prefix?: string
    /**
     * Custom separator for modifiers in Tailwind classes
     * @see https://tailwindcss.com/docs/configuration#separator
     */
    separator: string
  }

  type PartialPartial<T> = {
    [P in keyof T]?: Partial<T[P]>
  }

  type NoInfer<T> = [T][T extends any ? 0 : never]

  type GenericThemeGroupIds = string
  type GenericClassGroupIds = string

  interface ThemeGetter {
    (theme: ThemeObject<GenericThemeGroupIds>): ClassGroup<GenericClassGroupIds>
    isThemeGetter: true
  }

  type ClassObject<ThemeGroupIds extends string> = Record<
    string,
    readonly ClassDefinition<ThemeGroupIds>[]
  >

  type ClassDefinition<ThemeGroupIds extends string> =
    | string
    | ClassValidator
    | ThemeGetter
    | ClassObject<ThemeGroupIds>

  type ClassGroup<ThemeGroupIds extends string> =
    readonly ClassDefinition<ThemeGroupIds>[]

  type ThemeObject<ThemeGroupIds extends string> = Record<
    ThemeGroupIds,
    ClassGroup<ThemeGroupIds>
  >

  interface ConfigGroups<
    ClassGroupIds extends string,
    ThemeGroupIds extends string,
  > {
    /**
     * Theme scales used in classGroups.
     * The keys are the same as in the Tailwind config but the values are sometimes defined more broadly.
     */
    theme: NoInfer<ThemeObject<ThemeGroupIds>>
    /**
     * Object with groups of classes.
     * @example
     * {
     *     // Creates group of classes `group`, `of` and `classes`
     *     'group-id': ['group', 'of', 'classes'],
     *     // Creates group of classes `look-at-me-other` and `look-at-me-group`.
     *     'other-group': [{ 'look-at-me': ['other', 'group']}]
     * }
     */
    classGroups: NoInfer<Record<ClassGroupIds, ClassGroup<ThemeGroupIds>>>
    /**
     * Conflicting classes across groups.
     * The key is ID of class group which creates conflict, values are IDs of class groups which receive a conflict.
     * A class group ID is the key of a class group in classGroups object.
     * @example { gap: ['gap-x', 'gap-y'] }
     */
    conflictingClassGroups: NoInfer<
      Partial<Record<ClassGroupIds, readonly ClassGroupIds[]>>
    >
    /**
     * Postfix modifiers conflicting with other class groups.
     * A class group ID is the key of a class group in classGroups object.
     * @example { 'font-size': ['leading'] }
     */
    conflictingClassGroupModifiers: NoInfer<
      Partial<Record<ClassGroupIds, readonly ClassGroupIds[]>>
    >
  }

  interface ConfigExtension<
    ClassGroupIds extends string,
    ThemeGroupIds extends string,
  > extends Partial<ConfigStatic> {
    override?: PartialPartial<ConfigGroups<ClassGroupIds, ThemeGroupIds>>
    extend?: PartialPartial<ConfigGroups<ClassGroupIds, ThemeGroupIds>>
  }

  type GenericConfig = Config<GenericClassGroupIds, GenericThemeGroupIds>

  type CreateConfigSubsequent = (config: GenericConfig) => GenericConfig

  type TailwindMergeConfigExtension<
    AdditionalClassGroupIds extends string = never,
    AdditionalThemeGroupIds extends string = never,
  > =
    | ConfigExtension<
        DefaultClassGroupIds | AdditionalClassGroupIds,
        DefaultThemeGroupIds | AdditionalThemeGroupIds
      >
    | CreateConfigSubsequent
}
