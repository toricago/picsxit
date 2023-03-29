import { createSignal } from "solid-js"

export const [messages] = createSignal([
  {
    from: "vision",
    message: "Hi all",
  },
  {
    from: "visions",
    message: "Hi bro",
  },
  {
    from: "vision",
    message: "Whats up",
  },
  {
    from: "visions",
    message: `So I was here minding my business jellyfishing.
            Then I saw a bug in the code below:
            \`\`\`
            .App {
                max-width: 500px;
                margin: 0 auto;
                height: 100vh;
                overflow-y: hidden;
                scroll-behavior: smooth;
            }
            \`\`\``,
  },
])

export const cardList = [
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095442/dixit/xmoss_An_underwater_ballroom_where_elegantly_dressed_merfolk_da_6c972102-b23b-49f7-9640-b3e572f7d380_va8dim.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095442/dixit/xmoss_An_enormous_library_filled_with_books_of_all_shapes_and_s_b47b1bbb-d3f2-4ced-9bab-4416d55a1d9b_u2xcw2.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_serene_nighttime_scene_by_a_calm_lake_reflecting_the_fu_f36ebd99-0190-4dc9-8f68-8a1910425a6a_awlgxr.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_woman_at_the_center_of_a_storm_holding_an_umbrella_that_ba5812d6-4d82-41ab-a17d-841c06193c15_vcikzz.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_woman_sitting_on_the_edge_of_a_rooftop_releasing_a_floc_cfe57cba-1cd0-47ba-bd61-628a3483eab3_tthfcm.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_vintage_train_station_in_the_midst_of_an_expansive_dese_9ce0640e-f612-4cb8-b03b-71d176be0b44_msuiae.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_couple_dancing_gracefully_on_a_cloud_surrounded_by_a_ce_6857940a-9d9e-4750-8fa0-ea88e0abc2d9_n66n1f.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_person_walking_along_a_path_made_of_sheet_music_with_th_56e14bfe-9087-4139-af67-2529757f0ae1_pabrpx.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_rabbit_knight_clad_in_shining_armor_wielding_a_carrot-s_0aa35621-5317-4956-8a2e-c54809be6636_ksgbbc.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_mermaid_with_pink_hair_riding_a_bicycle_with_sea-foam_g_b249a29f-6261-4598-9a92-32735dd3c685_fk7zcb.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_man_sitting_alone_in_a_starry_night_with_a_telescope_be_98da4c3e-56af-49fe-adec-c67f348d1f28_rabbdw.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_majestic_mountain_range_where_the_peaks_are_made_of_cry_75b7136d-57f1-4ec1-b4ec-bfd768b0c770_h3xr3o.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_magical_garden_at_twilight_where_flowers_and_plants_glo_f0e97b24-45cd-424c-80fa-1eabe42498e4_vfigia.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_cozy_attic_space_filled_with_various_antiques_trinkets__abb92754-f094-4fff-9505-35234cc9d9e3_khab0l.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_group_of_friends_gathered_around_a_campfire_sharing_sto_14f59064-075b-4e44-8f2f-2db00050c85b_ehr4oi.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_giant_octopus_sitting_on_a_rock_by_the_sea_playing_ches_6a6e9edb-f94f-426d-9692-c8faa10e8099_uv3ogf.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_bear_wearing_a_tuxedo_and_a_top_hat_sitting_on_a_meltin_7c7345c5-46a7-4b15-8c75-abe1fb2b8bed_ieoql7.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_levitating_island_in_the_sky_topped_with_a_quaint_cotta_0fb0a516-a351-4223-b020-ebf8cb36d8aa_cfkkh2.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1679981574/dixit/xmoss_A_vintage_carousel_with_mythical_creatures_as_the_rides_s_42835576-e28a-42aa-b923-c9e7d06b24b9_odd5i4.jpg",
  //
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095442/dixit/xmoss_An_underwater_ballroom_where_elegantly_dressed_merfolk_da_6c972102-b23b-49f7-9640-b3e572f7d380_va8dim.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095442/dixit/xmoss_An_enormous_library_filled_with_books_of_all_shapes_and_s_b47b1bbb-d3f2-4ced-9bab-4416d55a1d9b_u2xcw2.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_serene_nighttime_scene_by_a_calm_lake_reflecting_the_fu_f36ebd99-0190-4dc9-8f68-8a1910425a6a_awlgxr.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_woman_at_the_center_of_a_storm_holding_an_umbrella_that_ba5812d6-4d82-41ab-a17d-841c06193c15_vcikzz.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_woman_sitting_on_the_edge_of_a_rooftop_releasing_a_floc_cfe57cba-1cd0-47ba-bd61-628a3483eab3_tthfcm.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_vintage_train_station_in_the_midst_of_an_expansive_dese_9ce0640e-f612-4cb8-b03b-71d176be0b44_msuiae.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_couple_dancing_gracefully_on_a_cloud_surrounded_by_a_ce_6857940a-9d9e-4750-8fa0-ea88e0abc2d9_n66n1f.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_person_walking_along_a_path_made_of_sheet_music_with_th_56e14bfe-9087-4139-af67-2529757f0ae1_pabrpx.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_rabbit_knight_clad_in_shining_armor_wielding_a_carrot-s_0aa35621-5317-4956-8a2e-c54809be6636_ksgbbc.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_mermaid_with_pink_hair_riding_a_bicycle_with_sea-foam_g_b249a29f-6261-4598-9a92-32735dd3c685_fk7zcb.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_man_sitting_alone_in_a_starry_night_with_a_telescope_be_98da4c3e-56af-49fe-adec-c67f348d1f28_rabbdw.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_majestic_mountain_range_where_the_peaks_are_made_of_cry_75b7136d-57f1-4ec1-b4ec-bfd768b0c770_h3xr3o.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_magical_garden_at_twilight_where_flowers_and_plants_glo_f0e97b24-45cd-424c-80fa-1eabe42498e4_vfigia.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_cozy_attic_space_filled_with_various_antiques_trinkets__abb92754-f094-4fff-9505-35234cc9d9e3_khab0l.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_group_of_friends_gathered_around_a_campfire_sharing_sto_14f59064-075b-4e44-8f2f-2db00050c85b_ehr4oi.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_giant_octopus_sitting_on_a_rock_by_the_sea_playing_ches_6a6e9edb-f94f-426d-9692-c8faa10e8099_uv3ogf.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_bear_wearing_a_tuxedo_and_a_top_hat_sitting_on_a_meltin_7c7345c5-46a7-4b15-8c75-abe1fb2b8bed_ieoql7.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_levitating_island_in_the_sky_topped_with_a_quaint_cotta_0fb0a516-a351-4223-b020-ebf8cb36d8aa_cfkkh2.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1679981574/dixit/xmoss_A_vintage_carousel_with_mythical_creatures_as_the_rides_s_42835576-e28a-42aa-b923-c9e7d06b24b9_odd5i4.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095442/dixit/xmoss_An_underwater_ballroom_where_elegantly_dressed_merfolk_da_6c972102-b23b-49f7-9640-b3e572f7d380_va8dim.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095442/dixit/xmoss_An_enormous_library_filled_with_books_of_all_shapes_and_s_b47b1bbb-d3f2-4ced-9bab-4416d55a1d9b_u2xcw2.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_serene_nighttime_scene_by_a_calm_lake_reflecting_the_fu_f36ebd99-0190-4dc9-8f68-8a1910425a6a_awlgxr.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_woman_at_the_center_of_a_storm_holding_an_umbrella_that_ba5812d6-4d82-41ab-a17d-841c06193c15_vcikzz.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_woman_sitting_on_the_edge_of_a_rooftop_releasing_a_floc_cfe57cba-1cd0-47ba-bd61-628a3483eab3_tthfcm.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_vintage_train_station_in_the_midst_of_an_expansive_dese_9ce0640e-f612-4cb8-b03b-71d176be0b44_msuiae.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_couple_dancing_gracefully_on_a_cloud_surrounded_by_a_ce_6857940a-9d9e-4750-8fa0-ea88e0abc2d9_n66n1f.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_person_walking_along_a_path_made_of_sheet_music_with_th_56e14bfe-9087-4139-af67-2529757f0ae1_pabrpx.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_rabbit_knight_clad_in_shining_armor_wielding_a_carrot-s_0aa35621-5317-4956-8a2e-c54809be6636_ksgbbc.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_mermaid_with_pink_hair_riding_a_bicycle_with_sea-foam_g_b249a29f-6261-4598-9a92-32735dd3c685_fk7zcb.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_man_sitting_alone_in_a_starry_night_with_a_telescope_be_98da4c3e-56af-49fe-adec-c67f348d1f28_rabbdw.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_majestic_mountain_range_where_the_peaks_are_made_of_cry_75b7136d-57f1-4ec1-b4ec-bfd768b0c770_h3xr3o.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_magical_garden_at_twilight_where_flowers_and_plants_glo_f0e97b24-45cd-424c-80fa-1eabe42498e4_vfigia.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_cozy_attic_space_filled_with_various_antiques_trinkets__abb92754-f094-4fff-9505-35234cc9d9e3_khab0l.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_group_of_friends_gathered_around_a_campfire_sharing_sto_14f59064-075b-4e44-8f2f-2db00050c85b_ehr4oi.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_giant_octopus_sitting_on_a_rock_by_the_sea_playing_ches_6a6e9edb-f94f-426d-9692-c8faa10e8099_uv3ogf.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_bear_wearing_a_tuxedo_and_a_top_hat_sitting_on_a_meltin_7c7345c5-46a7-4b15-8c75-abe1fb2b8bed_ieoql7.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_levitating_island_in_the_sky_topped_with_a_quaint_cotta_0fb0a516-a351-4223-b020-ebf8cb36d8aa_cfkkh2.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1679981574/dixit/xmoss_A_vintage_carousel_with_mythical_creatures_as_the_rides_s_42835576-e28a-42aa-b923-c9e7d06b24b9_odd5i4.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095442/dixit/xmoss_An_underwater_ballroom_where_elegantly_dressed_merfolk_da_6c972102-b23b-49f7-9640-b3e572f7d380_va8dim.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095442/dixit/xmoss_An_enormous_library_filled_with_books_of_all_shapes_and_s_b47b1bbb-d3f2-4ced-9bab-4416d55a1d9b_u2xcw2.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_serene_nighttime_scene_by_a_calm_lake_reflecting_the_fu_f36ebd99-0190-4dc9-8f68-8a1910425a6a_awlgxr.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_woman_at_the_center_of_a_storm_holding_an_umbrella_that_ba5812d6-4d82-41ab-a17d-841c06193c15_vcikzz.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_woman_sitting_on_the_edge_of_a_rooftop_releasing_a_floc_cfe57cba-1cd0-47ba-bd61-628a3483eab3_tthfcm.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_vintage_train_station_in_the_midst_of_an_expansive_dese_9ce0640e-f612-4cb8-b03b-71d176be0b44_msuiae.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_couple_dancing_gracefully_on_a_cloud_surrounded_by_a_ce_6857940a-9d9e-4750-8fa0-ea88e0abc2d9_n66n1f.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_person_walking_along_a_path_made_of_sheet_music_with_th_56e14bfe-9087-4139-af67-2529757f0ae1_pabrpx.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095441/dixit/xmoss_A_rabbit_knight_clad_in_shining_armor_wielding_a_carrot-s_0aa35621-5317-4956-8a2e-c54809be6636_ksgbbc.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_mermaid_with_pink_hair_riding_a_bicycle_with_sea-foam_g_b249a29f-6261-4598-9a92-32735dd3c685_fk7zcb.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_man_sitting_alone_in_a_starry_night_with_a_telescope_be_98da4c3e-56af-49fe-adec-c67f348d1f28_rabbdw.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_majestic_mountain_range_where_the_peaks_are_made_of_cry_75b7136d-57f1-4ec1-b4ec-bfd768b0c770_h3xr3o.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_magical_garden_at_twilight_where_flowers_and_plants_glo_f0e97b24-45cd-424c-80fa-1eabe42498e4_vfigia.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_cozy_attic_space_filled_with_various_antiques_trinkets__abb92754-f094-4fff-9505-35234cc9d9e3_khab0l.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095440/dixit/xmoss_A_group_of_friends_gathered_around_a_campfire_sharing_sto_14f59064-075b-4e44-8f2f-2db00050c85b_ehr4oi.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_giant_octopus_sitting_on_a_rock_by_the_sea_playing_ches_6a6e9edb-f94f-426d-9692-c8faa10e8099_uv3ogf.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_bear_wearing_a_tuxedo_and_a_top_hat_sitting_on_a_meltin_7c7345c5-46a7-4b15-8c75-abe1fb2b8bed_ieoql7.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1680095439/dixit/xmoss_A_levitating_island_in_the_sky_topped_with_a_quaint_cotta_0fb0a516-a351-4223-b020-ebf8cb36d8aa_cfkkh2.jpg",
  "https://res.cloudinary.com/dz4mll3dy/image/upload/v1679981574/dixit/xmoss_A_vintage_carousel_with_mythical_creatures_as_the_rides_s_42835576-e28a-42aa-b923-c9e7d06b24b9_odd5i4.jpg",
]
