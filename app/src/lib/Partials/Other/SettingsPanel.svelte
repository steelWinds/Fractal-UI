<script lang="ts">
	import { NumberInput, Slider } from "carbon-components-svelte";
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Navigation } from 'swiper';
	import Button from '$lib/UI/Button.svelte';
	import Input from '$lib/UI/Input.svelte';
	import RadioBtn from '@/lib/UI/RadioBtn.svelte';

	let capStyle: string = "";

	let fileName: string = '';
</script>

<Swiper
		modules={ [Navigation] }
		navigation={{
			nextEl: '.swiper-nav-arrow.next',
			prevEl: '.swiper-nav-arrow.prev',
			disabledClass: 'tw-opacity-25 tw-transition-opacity tw-transition-300'
		}} 
		nested
		preventClicks={false}
		preventClicksPropagation={false}
		passiveListeners={false}
		allowTouchMove={false}
    spaceBetween={100}
    slidesPerView={1}
		autoHeight
		class="tw-overflow-visible"
  >
		<svelte:fragment slot="container-end">
			<div
				class="
					tw-w-full
					tw-z-10
					tw-flex
					tw-justify-end
					tw-space-x-3
					tw-mt-3
					tw-bg-white
					"
				>
				<Button class="swiper-nav-arrow prev tw--rotate-180">
					<img src="/assets/icons/slider-arrow.svg" alt="Next button">
				</Button>

				<Button class="swiper-nav-arrow next">
					<img src="/assets/icons/slider-arrow.svg" class="tw-mt-[1px]" alt="Next button">
				</Button>
			</div>
		</svelte:fragment>

    <SwiperSlide>
			<h5
				class="
					tw-font-ProximaNova
					tw-font-semibold
					tw-text-2xl
					tw-mb-2
				"
			>
				Line
			</h5>

			<Input	
				type="text"
				class="tw-mb-2"
				placeholder="Weight"
				bind:value={fileName}
			/>

			<Input	
				type="text"
				class="tw-mb-2"
				placeholder="Color"
				bind:value={fileName}
			/>

			<h5
				class="
					tw-font-ProximaNova
					tw-font-semibold
					tw-text-xl
					tw-mb-2
				"
			>
				Cap style
			</h5>

			<div class="tw-flex tw-flex-row tw-flex-wrap tw-gap-2">
				<RadioBtn bind:group={capStyle} value="default" id="cap-default">
					default
				</RadioBtn>

				<RadioBtn bind:group={capStyle} value="round" id="cap-round">
					round
				</RadioBtn>

				<RadioBtn bind:group={capStyle} value="square" id="cap-square">
					square
				</RadioBtn>
			</div>
		</SwiperSlide>

		<SwiperSlide>
			<div class="custom-slider">
				<h5
					class="
						tw-font-ProximaNova
						tw-font-semibold
						tw-text-2xl
						tw-mb-2
					"
				>
					Coords
				</h5>

				<Slider labelText="X coord" max={1000} />
				<Slider labelText="Y coord" max={1000} />
			</div>
		</SwiperSlide>

		<SwiperSlide>
			<div>
				<h5
					class="
						tw-font-ProximaNova
						tw-font-semibold
						tw-text-2xl
						tw-mb-2
					"
				>
					Fractal
				</h5>

				<Input	
					type="text"
					class="tw-mb-2"
					placeholder="Axiom"
					bind:value={fileName}
				/>

				<Input	
					type="text"
					class="tw-mb-2"
					placeholder="Iterations"
					bind:value={fileName}
				/>

				<Input	
					type="text"
					class="tw-mb-2"
					placeholder="Segment size"
					bind:value={fileName}
				/>

				<Input	
					type="text"
					class="tw-mb-2"
					placeholder="Segment angle"
					bind:value={fileName}
				/>
			</div>
		</SwiperSlide>

		<SwiperSlide>
			<div>
				<h5
					class="
						tw-font-ProximaNova
						tw-font-semibold
						tw-text-2xl
						tw-mb-2
					"
				>
					Animation
				</h5>

				<Input	
					type="text"
					class="tw-mb-2"
					slottedInput
				>
					<svelte:fragment slot="input">
						<span class="custom-number-input">
							<NumberInput />
						</span>
					</svelte:fragment>
				</Input>
			</div>
		</SwiperSlide>
  </Swiper>